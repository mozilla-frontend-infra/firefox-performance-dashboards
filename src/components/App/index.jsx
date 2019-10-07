import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PerfherderGraph from '../PerfherderGraph';
import { queryInfo } from '../../config';

const sortByLabel = (a, b) => (a.label <= b.label ? -1 : 1);

const styles = () => ({
  container: {
    fontFamily: 'Roboto',
  },
});

// eslint-disable-next-line
class App extends Component {
  render() {
    const {
      classes, benchmark, viewConfig, viewPlatform, dayRange,
    } = this.props;
    const benchmarks = queryInfo(viewConfig, benchmark);

    return (
      <div className={classes.container}>
        <Navigation
          platform={viewPlatform}
          benchmark={benchmark}
          dayRange={dayRange}
        />
        {Object.values(benchmarks).sort(sortByLabel).map(({
          benchmarkUID, compare, label, includeSubtests, yLabel,
        }) => (
          <div key={label}>
            <PerfherderGraph
              extraLink={`/${viewPlatform}/${benchmarkUID}?numDays=${dayRange}`}
              title={label}
              series={Object.values(compare)}
              includeSubtests={includeSubtests}
              dayRange={dayRange}
              yLabel={yLabel}
            />
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  benchmark: PropTypes.string.isRequired,
  viewConfig: PropTypes.shape({
    label: PropTypes.string.isRequired,
    platform: PropTypes.arrayOf(PropTypes.string),
    benchmarks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  viewPlatform: PropTypes.string.isRequired,
  dayRange: PropTypes.number.isRequired,
};

export default withStyles(styles)(App);
