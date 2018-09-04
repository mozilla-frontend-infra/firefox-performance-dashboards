import PropTypes from 'prop-types';
import Legend from '../../components/Legend';
import ChartJSWrapper from '../../components/ChartJSWrapper';

const Graphs = ({ benchmarkData, topTitle }) => (
  <div>
    <div>
      <h1>{topTitle}</h1>
      {topTitle !== 'Overview' &&
        Object.values(benchmarkData.config).map(({
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
    </div>
    {Object.keys(benchmarkData.subbenchmarks)
      .sort()
      .map(key => benchmarkData.subbenchmarks[key])
      .map(({
        chartJsData, jointUrl, title, inverseYaxis = false,
      }) => (
        <div key={title}>
          <h2>{title}</h2>
          <ChartJSWrapper chartJsData={chartJsData} inverseYaxis={inverseYaxis} />
          <a href={jointUrl} target="_blank" rel="noopener noreferrer">PerfHerder link</a>
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmarkData: PropTypes.shape({}).isRequired,
  topTitle: PropTypes.string.isRequired,
};

export default Graphs;
