import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
  link: {
    color: '#868686',
    textDecoration: 'none',
    fontSize: '13px',
  },
});

const Footer = ({ classes }) => <a className={classes.link} href="https://github.com/mozilla-frontend-infra/firefox-performance-dashboard/issues">Open a issue</a>;

Footer.propTypes = ({
  classes: PropTypes.shape({}).isRequired,
});

export default withStyles(styles)(Footer);
