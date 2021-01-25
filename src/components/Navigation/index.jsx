import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import { setOrUpdateItem } from '../../utils/localStorageUtils';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '15px',
  },
});

const Pickers = Loadable({
  loader: () => import(/* webpackChunkName: 'Pickers' */ '../Pickers'),
  loading: Loading,
});

class Navigation extends Component {
  state = {
    benchmarks: [],
  };

  handlePathChange = (event) => {
    const { name, value } = event.target;
    const {
      // eslint-disable-next-line react/prop-types
      history,
      platform,
      category,
      benchmark,
      dayRange,
      selectedLabels,
    } = this.props;
    let newPlatform = platform;
    let newCategory = category;
    let newBenchmark = benchmark;
    let newDayRange = dayRange;
    let newSeries = selectedLabels;
    if (name === 'platform') {
      newPlatform = value;
      newBenchmark = 'overview';
    } else if (name === 'category') {
      newCategory = value;
      newBenchmark = 'overview';
    } else if (name === 'numDays') {
      newDayRange = value;
    } else if (name === 'series') {
      newSeries = value;
    } else {
      newBenchmark = value;
    }
    if (name !== 'results') {
      this.setState({
        benchmarks: [],
      });
    }
    if (newSeries.length === 0) {
      history.push(`/${newPlatform}/${newCategory}/${newBenchmark}?numDays=${newDayRange}`);
    } else {
      history.push(`/${newPlatform}/${newCategory}/${newBenchmark}?numDays=${newDayRange}&series=${newSeries}`);
    }
  };

  updateBenchmarks = (benchmark, itemKey) => {
    const { benchmarks } = this.state;
    if (!benchmarks.includes(benchmark)) {
      this.setState({
        benchmarks: [...benchmarks, benchmark],
      });
    }
    setOrUpdateItem(itemKey, benchmarks);
  };

  render() {
    const {
      classes, platform, category, benchmark, dayRange, labels, selectedLabels,
    } = this.props;
    return (
      <div className={classes.root}>
        <Pickers
          onChange={this.handlePathChange}
          platform={platform}
          category={category}
          benchmark={benchmark}
          dayRange={dayRange}
          labels={labels}
          selectedLabels={selectedLabels}
        />
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  dayRange: PropTypes.number.isRequired,
};

/* eslint-disable react/jsx-props-no-spreading */
const withRouterAndRef = (Wrapped) => {
  const WithRouter = withRouter(({ forwardRef, ...otherProps }) => (
    <Wrapped ref={forwardRef} {...otherProps} />
  ));
  const WithRouterAndRef = React.forwardRef((props, ref) => (
    <WithRouter {...props} forwardRef={ref} />
  ));
  const name = Wrapped.displayName || Wrapped.name;
  WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
  return WithRouterAndRef;
};

// withRouterAndRef() allow us to use this.props.history to push a new address and to forward refs
// this is necessary because withRouter() HOC doesn't yet support forward refs
export default withRouterAndRef(withStyles(styles)(Navigation));
