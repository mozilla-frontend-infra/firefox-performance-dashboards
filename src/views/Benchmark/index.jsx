import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { BENCHMARKS, CONFIG } from '../../config';
import prepareData from '../../utils/prepareData';
import './benchmark.css';

const DEFAULT_PLATFORM_SUITE = {
  benchmark: 'motionmark-animometer',
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
    if (CONFIG.platforms[platform] && CONFIG.platforms[platform].benchmarks.includes(benchmark)) {
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
      redirection = `/${value}/${CONFIG.platforms[value].benchmarks[0]}`;
      this.setState({ benchmark: CONFIG.platforms[value].benchmarks[0] });
    } else if (CONFIG.platforms[this.state.platform].benchmarks.includes(value)) {
      redirection = `/${this.state.platform}/${value}`;
    } else {
      // In the case the previous benchmark is cannot be chosen for this platform
      redirection = `/${this.state.platform}/${CONFIG.platforms[value].benchmarks[0]}`;
    }
    // eslint-disable-next-line react/prop-types
    this.props.history.push(redirection);
  }

  async fetchData(platform, benchmark) {
    const allData = {};
    await Promise.all(BENCHMARKS[benchmark].compare
      .map(async (benchmarkOptions) => {
        allData[benchmarkOptions.suite] = await subbenchmarksData(
          benchmarkOptions.frameworkId,
          CONFIG.platforms[platform].platform,
          benchmarkOptions.suite,
          benchmarkOptions.buildType,
        );
      }));
    this.setState({ benchmarkData: prepareData(allData) });
  }

  render() {
    const { benchmark, benchmarkData } = this.state;
    const colors = BENCHMARKS[benchmark] && BENCHMARKS[benchmark].colors
      ? BENCHMARKS[benchmark].colors
      : CONFIG.default.colors;
    const labels = BENCHMARKS[benchmark] && BENCHMARKS[benchmark].labels
      ? BENCHMARKS[benchmark].labels
      : CONFIG.default.labels;

    return (
      <div>
        <Header onChange={this.onChange} {...this.state} />
        {benchmarkData && Object.keys(benchmarkData).length > 0 &&
          <div>
            <div>
              <h3>{BENCHMARKS[benchmark].label}</h3>
              {Object.entries(benchmarkData.benchmark.urls).map((entry, index) => {
                const url = entry[1];
                return (
                  <div key={url}>
                    <span className="legend" style={{ backgroundColor: colors[index] }} />
                    <span>{labels[index]}: </span>
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">all subbenchmarks</a>
                  </div>
                );
              })}
            </div>
            {Object.values(benchmarkData.subbenchmarks).map(({
              data, jointUrl, meta, testName,
            }) => (
              <div key={testName}>
                <h3>{testName}</h3>
                <a href={jointUrl} target="_blank" rel="noopener noreferrer">link</a>
                <MetricsGraphics
                  key={meta.test}
                  data={data}
                  x_accessor="datetime"
                  y_accessor="value"
                  min_y_from_data
                  full_width
                  right="90"
                  legend={labels}
                  colors={colors}
                  aggregate_rollover
                  interpolate={curveLinear}
                />
              </div>
            ))}
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
