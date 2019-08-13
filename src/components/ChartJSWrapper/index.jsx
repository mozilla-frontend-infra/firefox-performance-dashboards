import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  chartJSWrapper: {
    height: '30vmax',
    maxHeight: '18rem',
    paddingRight: '1rem',
  },
});

const ChartJSWrapper = ({ classes, chartJsData, chartJsOptions }) => (
  chartJsData.datasets.length !== 0 ? (
    <div className={classes.chartJSWrapper}>
      <Chart type="scatter" data={chartJsData} options={chartJsOptions} />
    </div>
  ) : (
    <div className={classes.chartJSWrapper}>
      <span>No data to plot</span>
    </div>
  )
);

ChartJSWrapper.propTypes = {
  chartJsData: PropTypes.shape({}).isRequired,
  chartJsOptions: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(ChartJSWrapper);
