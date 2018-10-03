import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Pickers from '../Pickers';

class Navigation extends Component {
  static propTypes = {
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    timeRange: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    const {
      history, platform, benchmark, timeRange,
    } = this.props;
    let newPlatform;
    let newBenchmark;
    let newTimeRange;

    switch (name) {
      case 'platform':
        newPlatform = value;
        newBenchmark = 'overview';
        newTimeRange = timeRange;
        break;
      case 'benchmark':
        newPlatform = platform;
        newBenchmark = value;
        newTimeRange = timeRange;
        break;
      case 'timeRange':
        newPlatform = platform;
        newBenchmark = benchmark;
        newTimeRange = value;
        break;
      default:
        newPlatform = 'win10';
        newBenchmark = 'overview';
        newTimeRange = '90';
        return;
    }
    // eslint-disable-next-line react/prop-types
    history.push(`/${newPlatform}/${newBenchmark}/${newTimeRange}`);
  }

  render() {
    return (
      <Pickers onChange={this.onChange} {...this.props} />
    );
  }
}

// withRouter() allow us to use this.props.history to push a new address
export default withRouter(Navigation);
