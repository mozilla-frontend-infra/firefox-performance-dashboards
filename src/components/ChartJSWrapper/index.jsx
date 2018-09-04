import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';

const ChartJSWrapper = ({ chartJsData, inverseYaxis }) => (
  <Chart
    type="scatter"
    data={chartJsData}
    height={50}
    options={{
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
                displayFormats: {
                  hour: 'MMM D',
                },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              reverse: inverseYaxis,
            },
          },
        ],
      },
    }}
  />
);

ChartJSWrapper.propTypes = {
  chartJsData: PropTypes.shape({}).isRequired,
  inverseYaxis: PropTypes.bool,
};

ChartJSWrapper.defaultProps = {
  inverseYaxis: false,
};

export default ChartJSWrapper;
