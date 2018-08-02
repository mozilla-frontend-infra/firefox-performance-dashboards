import PropTypes from 'prop-types';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MetricsGraphics from 'react-metrics-graphics';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import Header from '../../components/Header';
import CONFIG from '../../config';
import prepareData from '../../utils/prepareData';

const styles = () => ({
  center: {
    textAlign: 'center',
  },
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
    this.setState({ subbenchmarks: null });
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
    this.setState({ subbenchmarks: prepareData(allData) });
  }

  render() {
    const { subbenchmarks } = this.state;

    return (
      <div>
        <Header onChange={this.onChange} {...this.state} />
        {subbenchmarks &&
          Object.values(subbenchmarks).map(({ data, meta, key }) => (
            <div key={key} className={this.props.classes.center}>
              <div>
                {Object.values(meta).map(({ suite }) => (
                  <a key={meta[suite].url} href={meta[suite].url} target="_blank" rel="noopener noreferrer">
                    {suite}
                  </a>
                ))}
              </div>
              <MetricsGraphics
                key={meta.test}
                data={data}
                x_accessor="datetime"
                y_accessor="value"
                min_y_from_data
                full_width
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default withStyles(styles)(Benchmark);
