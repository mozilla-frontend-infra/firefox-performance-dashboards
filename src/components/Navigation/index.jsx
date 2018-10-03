import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Pickers from '../Pickers';
import Slider from '../Slider';
import { generateLastDaysLabel } from '../../utils/timeRangeUtils';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '15px',
  },
});

class Navigation extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    timeRange: PropTypes.number.isRequired,
  };

  handlePathChange = (event) => {
    const { name, value } = event.target;
    const {
      // eslint-disable-next-line react/prop-types
      history, platform, benchmark, timeRange,
    } = this.props;

    let newPlatform = platform;
    let newBenchmark = benchmark;
    if (name === 'platform') {
      newPlatform = value;
      newBenchmark = 'overview';
    } else {
      newBenchmark = value;
    }
    history.push(`/${newPlatform}/${newBenchmark}?numDays=${timeRange}`);
  };

  handleSearchParamChange = (searchParam, value) => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    history.push(`?${searchParam}=${value}`);
  };

  render() {
    const {
      classes, platform, benchmark, timeRange,
    } = this.props;
    return (
      <div className={classes.root}>
        <Pickers
          onChange={this.handlePathChange}
          platform={platform}
          benchmark={benchmark}
        />
        <Slider
          identifier="timeRange"
          label="Time range"
          searchParam="numDays"
          selectedValue={timeRange}
          options={{ min: 1, max: 365, step: 1 }}
          onChangeUpdateTooltipFunc={generateLastDaysLabel}
          handleSliderChange={this.handleSearchParamChange}
        />
      </div>
    );
  }
}

// withRouter() allow us to use this.props.history to push a new address
export default withRouter((withStyles(styles))(Navigation));
