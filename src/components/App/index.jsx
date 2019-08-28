import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
// import Benchmark from '../../views/Benchmark';
// import Overview from '../../views/Overview';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PerfherderGraph from '../PerfherderGraph';
// import fetchData from '../../utils/fetchData';
import { queryInfo } from '../../config';

const styles = () => ({
  container: {
    fontFamily: 'Roboto',
  },
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    benchmark: PropTypes.string.isRequired,
    viewConfig: PropTypes.shape({
      label: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      benchmarks: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    viewPlatform: PropTypes.string.isRequired,
    dayRange: PropTypes.number.isRequired,
  };

  state = {
    benchmarkData: {},
    benchmarks: {},
  };

  constructor(props) {
    super(props);
    this.state.benchmarks = queryInfo(props.viewConfig, props.benchmark, props.dayRange);
  }

  componentDidMount() {
    this.mounted = true;
    // const { viewPlatform, benchmark, dayRange } = this.props;
    // this.fetchData(viewPlatform, benchmark, dayRange);
  }

  componentDidUpdate(prevProps) {
    const { viewPlatform, benchmark, dayRange } = this.props;
    if (benchmark !== prevProps.benchmark
      || viewPlatform !== prevProps.viewPlatform
      || dayRange !== prevProps.dayRange
    ) {
      this.fetchData(viewPlatform, benchmark, dayRange);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // async fetchData(viewPlatform, benchmark, dayRange) {
  fetchData() {
    if (this.mounted) {
      // this.setState({ benchmarks: {} });
      // this.setState({ benchmarkData: await fetchData(viewPlatform, benchmark, dayRange) });
    }
  }

  render() {
    const {
      classes, benchmark, viewPlatform, dayRange,
    } = this.props;
    // eslint-disable-next-line
    const { benchmarkData, benchmarks } = this.state;

    return (
      <div className={classes.container}>
        <Navigation
          platform={viewPlatform}
          benchmark={benchmark}
          dayRange={dayRange}
        />
        {Object.keys(benchmarks).sort().map((benchmarkUID) => {
          const { compare, label, options } = benchmarks[benchmarkUID];
          return (
            <div key={label}>
              <PerfherderGraph
                extraLink={`/${viewPlatform}/${benchmarkUID}?numDays=${dayRange}`}
                title={label}
                series={compare}
                options={options}
              />
            </div>
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
