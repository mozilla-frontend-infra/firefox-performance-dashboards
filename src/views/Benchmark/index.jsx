import PropTypes from 'prop-types';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import GraphWithTooltip from '../../components/GraphWithTooltip';
import Header from '../../components/Header';
import CONFIG from '../../config';
import prepareData from '../../utils/prepareData';
import './benchmark.css';

const styles = () => ({
  root: {},
});

class Benchmark extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    platform: 'win10',
    benchmark: 'motionmark-animometer',
  }

  async componentDidMount() {
    const { platform, benchmark } = this.state;
    this.fetchData(platform, benchmark);
  }

  componentDidUpdate(prevProps, prevState) {
    const { platform, benchmark } = this.state;
    if (benchmark !== prevState.benchmark || platform !== prevState.platform) {
      this.fetchData(platform, benchmark);
    }
  }

  async onChange(event) {
    // Clear the plotted graphs
    this.setState({ benchmarkData: null });
    if (event.target.name === 'platform') {
      this.setState({
        benchmark: Object.keys(CONFIG[event.target.value].benchmarks)[0],
      });
    }
    this.setState({ [event.target.name]: event.target.value });
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
    const { benchmark, benchmarkData, platform } = this.state;

    return (
      <div className={this.props.classes.root}>
        <Header onChange={this.onChange} {...this.state} />
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
            {Object.values(benchmarkData.subbenchmarks)
              .map(({ data, jointUrl, testName }, index) => (
                <div key={testName}>
                  <h3>{testName}</h3>
                  <a href={jointUrl} target="_blank" rel="noopener noreferrer">link</a>
                  <GraphWithTooltip
                    data={data}
                    uid={index.toString()}
                  />
                </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(Benchmark);
