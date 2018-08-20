import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import CONFIG from '../../config';
import prepareData from '../../utils/prepareData';
import './benchmark.css';

export class Benchmark extends Component {
  static propTypes = {
    benchmark: PropTypes.string,
    platform: PropTypes.string,
  }

  static defaultProps = {
    benchmark: 'motionmark-animometer',
    platform: 'win10',
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    benchmarkData: null,
  }

  async componentDidMount() {
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
      ? `/${event.target.value}/motionmark-animometer`
      : `/${this.props.platform}/${event.target.value}`;
    // eslint-disable-next-line react/prop-types
    this.props.history.push(redirection);
  }

  async fetchData(platform, benchmark) {
    const allData = {};
    const benchmarksToCompare = CONFIG[platform].benchmarks[benchmark].compare;
    await Promise.all(benchmarksToCompare.map(async (benchmarkKey) => {
      allData[benchmarkKey] = await subbenchmarksData(
        CONFIG[platform].frameworkId,
        CONFIG[platform].platform,
        benchmarkKey,
        CONFIG[platform].buildType,
      );
    }));
    this.setState({ benchmarkData: prepareData(allData) });
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
              <h3>{CONFIG[platform].benchmarks[benchmark].label}</h3>
              {Object.entries(benchmarkData.benchmark.urls).map((entry) => {
                const browserKey = entry[0];
                const url = entry[1];
                const classname = `legend ${browserKey === 'firefox' ? 'firefox-color' : 'chrome-color'}`;
                const upperBrowser = browserKey.replace(/^\w/, c => c.toUpperCase());
                return (
                  <div key={url}>
                    <span className={classname} />
                    <span>{upperBrowser}:</span>
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
                  right="60"
                  legend={['Firefox', 'Chrome']}
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
