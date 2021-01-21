import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import Footer from '../Footer';
import Navigation from '../Navigation';
import PerfherderGraph from '../PerfherderGraph';
import { queryInfo } from '../../config';
import Loading from '../Loading';
import Description from '../Description';

const sortByLabel = (a, b) => (a.label <= b.label ? -1 : 1);

const styles = () => ({
  container: {
    fontFamily: 'Roboto',
  },
});

const LoadableEmptyState = Loadable({
  loader: () => import(/* webpackChunkName: 'EmptyState' */ '../EmptyState'),
  loading: Loading,
});

// eslint-disable-next-line
class App extends Component {
  constructor(props) {
    super(props);
    this.navigationRef = React.createRef();
  }

  state = {
    selectedLabels: [],
  };

  handleData = (benchmarkUID) => {
    const { benchmark, viewPlatform, category } = this.props;
    const itemKey = `(${viewPlatform}, ${category})`;
    if (benchmark === 'overview') {
      this.navigationRef.current.updateBenchmarks(benchmarkUID, itemKey);
    }
  };

   handleChange = (event) => {
    this.setState(() => ({
      selectedLabels: [...event.target.value],
    }));
  };

  render() {
    const {
      classes, category, benchmark, viewConfig, viewPlatform, dayRange, selectedSeries,
    } = this.props;
    const benchmarks = queryInfo(viewConfig, benchmark, category);
    const labels = Object.values(benchmarks)
      .map(({ compare }) => (compare.map(({ label }) => (label))));
    const allLabels = [...new Set(labels.flat(1))];
    let selectedLabels = [];
    if (selectedSeries !== null && selectedSeries.length !== 0) {
      selectedLabels = selectedSeries.split(',');
    }
    return (
      <div className={classes.container}>
        {(Object.values(benchmarks).length !== 0)
        && (
        <Navigation
          platform={viewPlatform}
          category={category}
          benchmark={benchmark}
          dayRange={dayRange}
          ref={this.navigationRef}
          labels={allLabels}
          selectedLabels={selectedLabels}
        />
        )}
        <Description
          category={category}
        />
        {Object.values(benchmarks).length ? Object.values(benchmarks).sort(sortByLabel).map(({
          benchmarkUID, compare, label, includeSubtests, yLabel,
        }) => (
          <div key={label}>
            <PerfherderGraph
              extraLink={`/${viewPlatform}/${category}/${benchmarkUID}?numDays=${dayRange}`}
              title={label}
              series={Object.values(compare)}
              includeSubtests={includeSubtests}
              dayRange={dayRange}
              yLabel={yLabel}
              handleData={this.handleData}
              benchmarkUID={benchmarkUID}
              label={allLabels[0]}
              selectedLabels={selectedLabels}
            />
          </div>
        )) : <LoadableEmptyState text="Category not available for the selected Platform" />}
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
    categories: PropTypes.shape({}).isRequired,
  }).isRequired,
  viewPlatform: PropTypes.string.isRequired,
  dayRange: PropTypes.number.isRequired,
};

export default withStyles(styles)(App);
