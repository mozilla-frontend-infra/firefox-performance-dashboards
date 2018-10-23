import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../Picker';

const styles = () => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    padding: '15px',
  },
});

const Pickers = ({
  classes, benchmark, onChange, platform, benchmarkOptions, platformOptions,
}) => (
  <div className={classes.root}>
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChange}
      selectedValue={platform}
      options={platformOptions}
    />
    <Picker
      key="Benchmark selection"
      identifier="benchmark"
      topLabel="Benchmark"
      onSelection={onChange}
      selectedValue={benchmark}
      options={benchmarkOptions}
    />
  </div>
);

Pickers.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
  benchmarkOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  platformOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default withStyles(styles)(Pickers);
