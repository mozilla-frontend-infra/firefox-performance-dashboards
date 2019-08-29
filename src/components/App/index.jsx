import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PerfherderGraph from '../PerfherderGraph';
import { queryInfo } from '../../config';

const styles = () => ({
  container: {
    fontFamily: 'Roboto',
  },
});

// eslint-disable-next-line
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
        {Object.keys(benchmarks).sort().map((benchmarkUID) => {
          const { compare, label, includeSubtests } = benchmarks[benchmarkUID];
          return (
            <div key={benchmarkUID}>
              <PerfherderGraph
                extraLink={`/${viewPlatform}/${benchmarkUID}?numDays=${dayRange}`}
                title={label}
                series={compare}
                includeSubtests={includeSubtests}
                dayRange={dayRange}
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
