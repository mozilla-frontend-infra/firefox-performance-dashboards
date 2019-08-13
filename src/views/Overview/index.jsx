import React from 'react';
import PropTypes from 'prop-types';
// import CircularIndeterminate from '../../components/CircularIndeterminate';
// import Graphs from '../../components/Graphs';
// import fetchData from '../../utils/fetchData';
import overviewInfo from '../../utils/overviewInfo';

class Overview extends React.Component {
  static propTypes = {
    platform: PropTypes.string.isRequired,
    // timeRange: PropTypes.number.isRequired,
  };

  render() {
    const { platform } = this.props;
    const foo = overviewInfo(platform);

    return foo.map(bar => <h2>{bar[1]}</h2>);
  }
}

export default Overview;
