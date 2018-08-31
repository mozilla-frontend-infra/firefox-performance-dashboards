import { Component } from 'react';
import PropTypes from 'prop-types';
import Graphs from '../../components/Graphs';
import fetchData from '../../utils/fetchData';
import { BENCHMARKS } from '../../config';

class Benchmark extends Component {
  static propTypes = {
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  }

  state = {
    benchmarkData: {},
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

  async fetchData(platform, benchmark) {
    this.setState({ benchmarkData: {} });
    this.setState({ benchmarkData: await fetchData(platform, benchmark) });
  }

  render() {
    const { benchmarkData } = this.state;
    const label = this.props.benchmark === 'overview'
      ? 'Overview' : BENCHMARKS[this.props.benchmark].label;

    return (Object.keys(benchmarkData).length > 0 &&
      <Graphs
        topTitle={label}
        benchmarkData={benchmarkData}
      />
    );
  }
}

export default Benchmark;
