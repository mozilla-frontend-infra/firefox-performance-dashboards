import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
// import Benchmark from '../../views/Benchmark';
// import Overview from '../../views/Overview';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PerfherderGraph from '../PerfherderGraph';
// import fetchData from '../../utils/fetchData';
import overviewInfo from '../../utils/overviewInfo';
import { convertToSeconds } from '../../utils/timeRangeUtils';

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
    benchmarks: [],
  };

  constructor(props) {
    super(props);
    if (props.benchmark === 'overview') {
      this.state.benchmarks = overviewInfo(props.viewPlatform);
    }
  }

  componentDidMount() {
    this.mounted = true;
    const { viewPlatform, benchmark, dayRange } = this.props;
    this.fetchData(viewPlatform, benchmark, dayRange);
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
      this.setState({ benchmarkData: {} });
      // this.setState({ benchmarkData: await fetchData(viewPlatform, benchmark, dayRange) });
    }
  }

  render() {
    const {
      classes, benchmark, viewConfig, viewPlatform, dayRange,
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
        { benchmark === 'overview' ? (
          Object.keys(benchmarks).sort().map((benchmarkUID) => {
            const benchmarkConfig = benchmarks[benchmarkUID];
            // We need to set the platform for fetching data from Treeherder
            Object.values(benchmarkConfig.compare).forEach((seriesConfig) => {
              let { platform } = viewConfig;
              // XXX: We need to refactor this
              if (seriesConfig.suite.endsWith('-chromium')) {
                platform = `${platform}-shippable`;
              }
              // eslint-disable-next-line no-param-reassign
              seriesConfig.platform = platform;
            });
            return (
              <div key={benchmarkConfig.label}>
                <PerfherderGraph
                  extraLink={`/${viewPlatform}/${benchmarkUID}?numDays=${dayRange}`}
                  title={benchmarkConfig.label}
                  series={benchmarkConfig.compare}
                  options={{ timeRange: convertToSeconds(dayRange) }}
                />
              </div>
            );
            // <div key={title}>
            //   <h2 className={classes.benchmarkTitle}>{title}</h2>
            //   <a href={jointUrl} target="_blank" rel="noopener noreferrer">
            //     <LinkIcon className={classes.linkIcon} />
            //   </a>
            //   {overviewMode ? (
            //     <Link to={`/${platform}/${configUID}?numDays=60`} rel="noopener noreferrer">
            //       <ArrowDownward className={classes.linkIcon} />
            //     </Link>
            //   ) : null}
            //   <ChartJSWrapper
            //     chartJsData={chartJsData}
            //     chartJsOptions={chartJsOptions}
            //   />
            // </div>
          })
        ) : (
          <div />
        )}
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
