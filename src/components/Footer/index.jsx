import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  footer: {
    textAlign: 'center',
    marginTop: '36px',
    padding: '14px',
    borderTop: '1px solid #e8e6e6',
  },
  footerLink: {
    textDecoration: 'none',
  },
});

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <a className={classes.footerLink} href="https://github.com/mozilla-frontend-infra/firefox-performance-dashboard/issues">
      Open an issue
    </a>
  </div>
);

Footer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Footer);
