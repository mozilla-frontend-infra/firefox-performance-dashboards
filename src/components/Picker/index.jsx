import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  root: {
    margin: '0 20px',
  },
});

const Picker = ({
  classes, identifier, topLabel, onSelection, options, selectedValue,
}) => (
  <form className={classes.root} autoComplete="off">
    <TextField
      name={identifier}
      select
      label={topLabel}
      value={selectedValue}
      onChange={onSelection}
    >
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>{label}</MenuItem>
      ))}
    </TextField>
  </form>
);

Picker.propTypes = {
  classes: PropTypes.shape().isRequired,
  identifier: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selectedValue: PropTypes.string.isRequired,
  topLabel: PropTypes.string.isRequired,
};

export default withStyles(styles)(Picker);
