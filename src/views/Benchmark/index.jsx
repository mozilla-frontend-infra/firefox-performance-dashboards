import { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorPanel from '@mozilla-frontend-infra/components/ErrorPanel';
import CircularIndeterminate from '../../components/CircularIndeterminate';
import Graphs from '../../components/Graphs';
import fetchData from '../../utils/fetchData';

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
    try {
      this.setState({ benchmarkData: await fetchData(platform, benchmark) });
    } catch (e) {
      // TODO: Once we have Sentry support we can just report it
      // eslint-disable-next-line
      console.error(e);
      this.setState({ errorMessage: 'We have failed to fetch the data. Try again.' });
    }
  }

  render() {
    const { benchmarkData, errorMessage } = this.state;

    if (errorMessage) {
      return (
        <ErrorPanel
          disableStackTrace={false}
          error={new Error(errorMessage)}
        />
      );
    }

    return (Object.keys(benchmarkData).length === 0)
      ? <CircularIndeterminate />
      : (
        <Graphs
          benchmarkData={benchmarkData}
          overviewMode={this.props.benchmark === 'overview'}
        />
      );
  }
}

export default Benchmark;
