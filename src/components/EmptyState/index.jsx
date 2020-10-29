import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { WarningOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';


const styles = () => ({
  container: {
    minHeight: '600px',
  },
  icon: {
    color: 'grey',
    width: '60px',
    height: '60px',
  },
  text: {
    color: 'grey',
  },
});

const EmptyState = ({ classes, text }) => {
  const history = useHistory();
  return (
    <Grid container justify="center" alignItems="center" direction="column" spacing={2} className={classes.container}>
      <Grid item>
        <WarningOutlined fontSize="large" className={classes.icon} />
      </Grid>
      <Grid item>
        <Typography variant="h5">No results</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={history.goBack}>Go back</Button>
      </Grid>
    </Grid>
  );
};

EmptyState.propTypes = {
  text: PropTypes.string,
};

EmptyState.defaultProps = {
  text: 'No tests are available for the current combination of selected Platform, Category and Results.',
};

export default withStyles(styles)(EmptyState);
