import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularIndeterminate from '../../components/CircularIndeterminate';
import Graphs from '../../components/Graphs';
import fetchData from '../../utils/fetchData';

class Benchmark extends Component {
  static propTypes = {
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    timeRange: PropTypes.string.isRequired,
  };

  state = {
    benchmarkData: {},
  };

  componentDidMount() {
    const { platform, benchmark, timeRange } = this.props;
    this.fetchData(platform, benchmark, timeRange);
  }

  componentDidUpdate(prevProps) {
    const { platform, benchmark, timeRange } = this.props;
    if (benchmark !== prevProps.benchmark
      || platform !== prevProps.platform
      || timeRange !== prevProps.timeRange
    ) {
      this.fetchData(platform, benchmark, timeRange);
    }
  }

  async fetchData(platform, benchmark, timeRange) {
    this.setState({ benchmarkData: {} });
    this.setState({ benchmarkData: await fetchData(platform, benchmark, timeRange) });
  }

  render() {
    const { benchmark } = this.props;
    const { benchmarkData } = this.state;

    return (Object.keys(benchmarkData).length === 0)
      ? <CircularIndeterminate />
      : (
        <Graphs
          benchmarkData={benchmarkData}
          overviewMode={benchmark === 'overview'}
        />
      );
  }
}

export default Benchmark;
