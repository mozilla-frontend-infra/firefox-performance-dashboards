import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
// import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import { withRouter } from 'react-router-dom';
import { fetchBenchmarkData, subbenchmarksData } from '../../utils/perfherder';
import Header from '../../components/Header';
import Legend from '../../components/Legend';
import CONFIG from '../../config';
import prepareData from '../../utils/prepareData';

export class Benchmark extends Component {
  static propTypes = {
    benchmark: PropTypes.string,
    platform: PropTypes.string,
  }

  static defaultProps = {
    benchmark: 'overview',
    platform: 'win10',
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    benchmarkData: null,
  }

  componentDidMount() {
    const { platform, benchmark } = this.props;
    this.fetchData(platform, benchmark);
  }

  componentDidUpdate(prevProps) {
    const { platform, benchmark } = this.props;
    if (benchmark !== prevProps.benchmark || platform !== prevProps.platform) {
      this.fetchData(platform, benchmark);
    }
  }

  async onChange(event) {
    // Clear the plotted graphs
    this.setState({ benchmarkData: null });
    const redirection = event.target.name === 'platform'
      ? `/?platform=${event.target.value}&benchmark=motionmark-animometer`
      : `/?platform=${this.props.platform}&benchmark=${event.target.value}`;
    // eslint-disable-next-line react/prop-types
    this.props.history.push(redirection);
  }

  async fetchData(platform, benchmark) {
    const benchmarkData = {};
    let benchmarksToCompare;
    if (benchmark === 'overview') {
      benchmarksToCompare = Object.values(CONFIG[platform].benchmarks)
        .map(({ compare }) => compare);
      await Promise.all(benchmarksToCompare
        .map(async (comparingBenchmarks) => {
          await Promise.all(comparingBenchmarks
            .map(async (benchmarkKey) => {
              benchmarkData[benchmarkKey] = await fetchBenchmarkData(
                CONFIG[platform].frameworkId,
                CONFIG[platform].platform,
                benchmarkKey,
                CONFIG[platform].buildType,
              );
            }));
        }));
    } else {
      benchmarksToCompare = CONFIG[platform].benchmarks[benchmark].compare;
      await Promise.all(benchmarksToCompare.map(async (benchmarkKey) => {
        benchmarkData[benchmarkKey] = await subbenchmarksData(
          CONFIG[platform].frameworkId,
          CONFIG[platform].platform,
          benchmarkKey,
          CONFIG[platform].buildType,
        );
      }));
    }
    this.setState({ benchmarkData: prepareData(benchmarkData) });
  }

  render() {
    const { benchmarkData } = this.state;
    const { benchmark, platform } = this.props;

    return (
      <div>
        <Header onChange={this.onChange} {...this.props} />
        {benchmarkData && Object.keys(benchmarkData).length > 0 &&
          <div>
            <div>
              <h3>
                {benchmark !== 'overview' ?
                  CONFIG[platform].benchmarks[benchmark].label : 'Overview'
                }
              </h3>
              {/* // XXX: Move colors to config.js */}
              {Object.keys(benchmarkData.benchmark.urls).map(label => (
                <Legend
                  key={label}
                  label={label}
                  labelColor={label === 'Firefox' ? '#e55525' : '#ffcd02'}
                />
              ))}
              <hr />
            </div>
            {Object.values(benchmarkData.subbenchmarks).map(({
              data, jointUrl, testUid,
            }) => {
              const title = CONFIG[platform].benchmarks[testUid] ?
                CONFIG[platform].benchmarks[testUid].label : testUid;
              return (
                <div key={testUid}>
                  <MetricsGraphics
                    title={title}
                    key={testUid}
                    data={data}
                    x_accessor="datetime"
                    y_accessor="value"
                    min_y_from_data
                    full_width
                    right="60"
                    legend={['Firefox', 'Chrome']}
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
