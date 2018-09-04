import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';

const Graphs = ({ chartJsData, inverseYaxis }) => (
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

Graphs.propTypes = {
  chartJsData: PropTypes.shape({}).isRequired,
  inverseYaxis: PropTypes.bool,
};

Graphs.defaultProps = {
  inverseYaxis: false,
};

export default Graphs;
