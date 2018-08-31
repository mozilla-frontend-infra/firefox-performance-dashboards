import PropTypes from 'prop-types';
import Legend from '../../components/Legend';
import Chart from '../../components/Chart';
import { BENCHMARKS } from '../../config';

const Graphs = ({ benchmark, benchmarkData }) => (
  <div>
    <div>
      {benchmark === 'overview' && <h1>Overview</h1>}
      {benchmark !== 'overview' &&
        <div>
          <h1>{BENCHMARKS[benchmark].label}</h1>
          {Object.values(benchmarkData.config).map(({
            color, label, suite, url,
          }) => (
            <Legend
              key={suite}
              label={label}
              labelColor={color}
            >
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                 all subbenchmarks
              </a>
            </Legend>
            ))}
          <hr />
        </div>
      }
    </div>
    {Object.keys(benchmarkData.subbenchmarks)
      .sort()
      .map(key => benchmarkData.subbenchmarks[key])
      .map(({
        chartJsData, configUID, jointUrl, title,
      }) => (
        <div key={title}>
          <h2>{title}</h2>
          <Chart configUID={configUID} chartJsData={chartJsData} />
          <a href={jointUrl} target="_blank" rel="noopener noreferrer">PerfHerder link</a>
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmark: PropTypes.string.isRequired,
  benchmarkData: PropTypes.shape({}).isRequired,
};

export default Graphs;
