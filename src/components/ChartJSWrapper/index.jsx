import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';

const ChartJSWrapper = ({ chartJsData, chartJsOptions }) => (
  <Chart
    type="scatter"
    data={chartJsData}
    height={50}
    options={chartJsOptions}
  />
);

ChartJSWrapper.propTypes = {
  chartJsData: PropTypes.shape({}).isRequired,
  chartJsOptions: PropTypes.shape({}).isRequired,
};

export default ChartJSWrapper;
