import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularIndeterminate from '../../components/CircularIndeterminate';
import Graphs from '../../components/Graphs';
import fetchData from '../../utils/fetchData';

class Benchmark extends Component {
  static propTypes = {
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  };

  state = {
    benchmarkData: {},
  };

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
    const { benchmark, platform } = this.props;
    const { benchmarkData } = this.state;

    return (Object.keys(benchmarkData).length === 0)
      ? <CircularIndeterminate />
      : (
        <Graphs
          benchmarkData={benchmarkData}
          platform={platform}
          overviewMode={benchmark === 'overview'}
        />
      );
  }
}

export default Benchmark;
