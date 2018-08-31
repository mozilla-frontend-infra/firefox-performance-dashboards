import PropTypes from 'prop-types';
import Chart from 'react-chartjs-2';

const Graphs = ({ configUID, chartJsData }) => (
  <Chart
    key={configUID}
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
  configUID: PropTypes.string.isRequired,
  chartJsData: PropTypes.shape({}).isRequired,
};

export default Graphs;
