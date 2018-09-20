import PropTypes from 'prop-types';
import Legend from '../../components/Legend';
import ChartJSWrapper from '../../components/ChartJSWrapper';

const sortOverviewFirst = (a, b) => {
  if (a.includes('overview') || b.includes('overview')) {
    return -1;
  }
  return (a <= b ? -1 : 1);
};

const Graphs = ({ benchmarkData, overviewMode }) => (
  <div>
    {!overviewMode &&
      Object.values(benchmarkData.topLabelsConfig).map(({
        color, label, suite, url,
      }) => (
        label &&
          <Legend
            key={suite}
            label={label}
            labelColor={color}
          >
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">
               all subbenchmarks
            </a>
          </Legend>
      ))
    }
    {Object.keys(benchmarkData.graphs)
      .sort(overviewMode ? undefined : sortOverviewFirst)
      .map(key => benchmarkData.graphs[key])
      .map(({
        chartJsData, chartJsOptions, jointUrl, title,
      }) => (
        <div key={title}>
          <h2>{title}</h2>
          <ChartJSWrapper chartJsData={chartJsData} chartJsOptions={chartJsOptions} />
        <a href={jointUrl} target="_blank" rel="noopener noreferrer"><i class="material-icons">link</i></a>
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmarkData: PropTypes.shape({}).isRequired,
  overviewMode: PropTypes.bool.isRequired,
};

export default Graphs;
