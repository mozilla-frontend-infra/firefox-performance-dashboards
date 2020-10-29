import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Loadable from 'react-loadable';
import Loading from '../Loading';

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
  handlePathChange = (event) => {
    const { name, value } = event.target;
    const {
      // eslint-disable-next-line react/prop-types
      history,
      platform,
      category,
      benchmark,
      dayRange,
    } = this.props;

    let newPlatform = platform;
    let newCategory = category;
    let newBenchmark = benchmark;
    let newDayRange = dayRange;
    if (name === 'platform') {
      newPlatform = value;
      newBenchmark = 'overview';
    } else if (name === 'category') {
      newCategory = value;
      newBenchmark = 'overview';
    } else if (name === 'numDays') {
      newDayRange = value;
    } else {
      newBenchmark = value;
    }
    history.push(`/${newPlatform}/${newCategory}/${newBenchmark}?numDays=${newDayRange}`);
  };

  render() {
    const {
      classes, platform, category, benchmark, dayRange,
    } = this.props;
    return (
      <div className={classes.root}>
        <Pickers
          onChange={this.handlePathChange}
          platform={platform}
          category={category}
          benchmark={benchmark}
          dayRange={dayRange}
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

// withRouter() allow us to use this.props.history to push a new address
export default withRouter(withStyles(styles)(Navigation));
