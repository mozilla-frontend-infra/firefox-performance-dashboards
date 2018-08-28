import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
import { withRouter } from 'react-router-dom';
import { fetchBenchmarkData, subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import Header from '../../components/Header';
import Legend from '../../components/Legend';
import { BENCHMARKS, CONFIG } from '../../config';
import prepareData from '../../utils/prepareData';
import colorsAndLabels from '../../utils/colorsAndLabels';

const validCombination = (platform, benchmark) => (
  benchmark === 'overview' ||
  (CONFIG.platforms[platform] && CONFIG.platforms[platform].benchmarks.includes(benchmark))
);

const DEFAULT_PLATFORM_SUITE = {
  benchmark: 'overview',
  platform: 'win10',
};

export class Benchmark extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = DEFAULT_PLATFORM_SUITE;
    /* eslint-disable react/prop-types */
    if (props.match) {
      this.state = {
        benchmark: props.match.params.benchmark,
        platform: props.match.params.platform,
      };
    }
    /* eslint-enable react/prop-types */
  }

  state = {
    benchmarkData: null,
  }

  componentDidMount() {
    const { platform, benchmark } = this.state;
    if (validCombination(platform, benchmark)) {
      this.fetchData(platform, benchmark);
    } else {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState(DEFAULT_PLATFORM_SUITE);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { platform, benchmark } = this.state;
    if (benchmark !== prevState.benchmark || platform !== prevState.platform) {
      this.fetchData(platform, benchmark);
    }
  }

  onChange(event) {
    // Clear the plotted graphs
    this.setState({ benchmarkData: null });
    const { name, value } = event.target;
    this.setState({ [event.target.name]: event.target.value });
    let redirection = CONFIG.default.landingPath;
    if (name === 'platform') {
      redirection = `/${value}/overview`;
      this.setState({ platform: value, benchmark: 'overview' });
    } else if (validCombination(this.state.platform, value)) {
      redirection = `/${this.state.platform}/${value}`;
    } else {
      // In the case the previous benchmark is cannot be chosen for this platform
      redirection = `/${this.state.platform}/overview`;
    }
    // eslint-disable-next-line react/prop-types
    this.props.history.push(redirection);
  }

  async fetchData(platform, benchmark) {
    const benchmarkData = {};
    if (benchmark === 'overview') {
      const benchmarksToCompare = CONFIG.platforms[platform].benchmarks;
      await Promise.all(benchmarksToCompare
        .map(async (benchmarkKey) => {
          const comparingBenchmarks = BENCHMARKS[benchmarkKey].compare;
          await Promise.all(comparingBenchmarks
            .map(async (benchmarkOptions) => {
              benchmarkData[benchmarkOptions.suite] = await fetchBenchmarkData(
                benchmarkOptions.frameworkId,
                CONFIG.platforms[platform].platform,
                benchmarkOptions.suite,
                benchmarkOptions.buildType,
              );
              benchmarkData[benchmarkOptions.suite].configUID = benchmarkKey;
            }));
        }));
    } else {
      await Promise.all(BENCHMARKS[benchmark].compare
        .map(async (benchmarkOptions) => {
          benchmarkData[benchmarkOptions.suite] = await subbenchmarksData(
            benchmarkOptions.frameworkId,
            CONFIG.platforms[platform].platform,
            benchmarkOptions.suite,
            benchmarkOptions.buildType,
          );
          benchmarkData[benchmarkOptions.suite].configUID = benchmark;
        }));
    }
    this.setState({ benchmarkData: prepareData(benchmarkData) });
  }

  render() {
    const { benchmark, benchmarkData } = this.state;

    return (
      <div>
        <Header onChange={this.onChange} {...this.state} />
        {benchmarkData && Object.keys(benchmarkData).length > 0 &&
          <div>
            <div>
              {benchmark === 'overview' && <h3>Overview</h3>}
              {benchmark !== 'overview' &&
                <div>
                  <h3>{BENCHMARKS[benchmark].label}</h3>
                  {Object.entries(benchmarkData.benchmark.urls).map((entry, index) => {
                    const url = entry[1];
                    const { colors, labels } = colorsAndLabels(benchmark);
                    return (
                      <Legend
                        key={url}
                        label={labels[index]}
                        labelColor={colors[index]}
                      >
                        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                           all subbenchmarks
                        </a>
                      </Legend>
                    );
                  })}
                  <hr />
                </div>
              }
            </div>
            {Object.keys(benchmarkData.subbenchmarks)
              .sort()
              .map(key => benchmarkData.subbenchmarks[key])
              .map(({
                data, jointUrl, configUID, title,
              }) => {
                const { colors, labels } = colorsAndLabels(configUID);
                return (
                  <div key={title}>
                    <MetricsGraphics
                      title={title}
                      data={data}
                      x_accessor="datetime"
                      y_accessor="value"
                      min_y_from_data
                      full_width
                      right="100"
                      legend={labels}
                      colors={colors}
                      aggregate_rollover
                      interpolate={curveLinear}
                    />
                    <a href={jointUrl} target="_blank" rel="noopener noreferrer">PerfHerder link</a>
                  </div>
                );
            })}
          </div>
        }
      </div>
    );
  }
}

// We export the class without withRouter() for our tests while
// the default export includes it. Read more in here:
// https://github.com/airbnb/enzyme/issues/1112#issuecomment-357278022
export default withRouter(Benchmark);
