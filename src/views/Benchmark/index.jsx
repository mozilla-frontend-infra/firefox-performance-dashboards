import PropTypes from 'prop-types';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MetricsGraphics from 'react-metrics-graphics';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import Header from '../../components/Header';
import CONFIG from '../../config';

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
    benchmark: 'raptor-motionmark-animometer-firefox',
  }

  async componentDidMount() {
    const { platform, benchmark } = this.state;
    this.fetchData(
      CONFIG[platform].options.frameworkId,
      CONFIG[platform].perfherderKey,
      benchmark,
      CONFIG[platform].options.buildType,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { platform, benchmark } = this.state;
    if (benchmark !== prevState.benchmark || platform !== prevState.platform) {
      this.fetchData(
        CONFIG[platform].options.frameworkId,
        CONFIG[platform].perfherderKey,
        benchmark,
        CONFIG[platform].options.buildType,
      );
    }
  }

  async onChange(event) {
    if (event.target.name === 'platform') {
      this.setState({
        benchmark: Object.keys(CONFIG[event.target.value].benchmarks)[0],
      });
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  async fetchData(frameworkId, perfherderKey, benchmark, option) {
    const { perfherderUrl, data } = await subbenchmarksData(
      frameworkId,
      perfherderKey,
      benchmark,
      option,
    );
    this.setState({ perfherderUrl, data });
  }

  render() {
    const { data } = this.state;

    const sortAlphabetically = (a, b) => {
      if (a.meta.test < b.meta.test) {
        return -1;
      } else if (a.meta.test > b.meta.test) {
        return 1;
      }
      return 0;
    };

    return (
      <div>
        <Header onChange={this.onChange} {...this.state} />
        {this.state.perfherderUrl &&
          Object.values(data).sort(sortAlphabetically).map(el => (
            <div key={el.meta.test} className={this.props.classes.center}>
              <a href={el.meta.url} target="_blank" rel="noopener noreferrer">{el.meta.test}</a>
              <MetricsGraphics
                key={el.meta.test}
                data={el.data}
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
