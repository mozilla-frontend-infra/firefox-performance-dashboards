import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    minWidth: 275,
    marginLeft: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  pos: {
    padding: '16px !important',
  },
});

class Description extends React.Component {
  getDescriptionForPage() {
    const { category } = this.props;
    let descr = null;
    if (category.includes('live')) {
      descr = `Live Page Load Metrics are unstable by nature and aren't 
      actively monitored for regressions or failure.`;
    }
    return descr;
  }

  render() {
    const { classes } = this.props;
    const description = this.getDescriptionForPage();

    return ((
      <div className={classes.root}>
        {description && (
          <CardContent className={classes.pos}>
            <Typography color="textSecondary">
              { description }
            </Typography>
          </CardContent>
        )}
      </div>
    )
    );
  }
}

Description.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Description);
