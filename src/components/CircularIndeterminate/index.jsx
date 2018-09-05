import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  root: {
    display: 'block',
    margin: '4em auto',
  },
};

const CircularIndeterminate = ({ classes }) => (
  <CircularProgress
    classes={{
      root: classes.root,
    }}
    size={70}
  />
);

CircularIndeterminate.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
