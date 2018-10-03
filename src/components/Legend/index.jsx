import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  legend: {
    border: '1px solid #000',
    borderRadius: '1em',
    display: 'inline-block',
    width: '1em',
    height: '1em',
    verticalAlign: 'bottom',
    margin: '0 .2em .1em 0',
  },
});

const Legend = ({
  classes, label, labelColor, children,
}) => (
  <div key={label}>
    <span className={classes.legend} style={{ backgroundColor: labelColor }} />
    <span>{label}</span>
    {children && <span>: </span>}
    {children}
  </div>
);

Legend.propTypes = ({
  children: PropTypes.shape({}),
  classes: PropTypes.shape({}).isRequired,
  labelColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Legend.defaultProps = ({
  children: null,
});

export default withStyles(styles)(Legend);
