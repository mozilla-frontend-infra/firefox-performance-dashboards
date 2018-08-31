import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';

const Graphs = ({ chartJsData }) => (
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
      },
    }}
  />
);

Graphs.propTypes = {
  chartJsData: PropTypes.shape({}).isRequired,
};

export default Graphs;
