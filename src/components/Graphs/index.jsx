import LinkIcon from '@material-ui/icons/Link';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Legend from '../../components/Legend';
import ChartJSWrapper from '../../components/ChartJSWrapper';

const styles = {
  anchorTag: {
    marginRight: '3px',
  },
  anchorIcon: {
    verticalAlign: 'middle',
  },
};

const sortOverviewFirst = (a, b) => {
  if (a.includes('overview')) {
    return -1;
  }
  if (b.includes('overview')) {
    return 1;
  }
  return (a <= b ? -1 : 1);
};

const styles = () => ({
  benchmarkTitle: {
    display: 'inline-block',
    margin: 10,
  },
  linkIcon: {
    marginBottom: -5,
  },
});

const Graphs = ({ classes, benchmarkData, overviewMode }) => (
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
      .map((key) => {
        const graph = benchmarkData.graphs[key];
        graph.anchor = key;
        return graph;
      })
      .map(({
        chartJsData, chartJsOptions, jointUrl, title, anchor,
      }) => (
        <div key={title}>
          <h2>
            <a id={anchor} href={`#${anchor}`} style={styles.anchorTag}>
              <svg width="20" height="20" viewBox="0 0 24 24" style={styles.anchorIcon}>
                <path fill="#000000" d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" />
              </svg>
            </a>
            {title}
          </h2>
          <ChartJSWrapper chartJsData={chartJsData} chartJsOptions={chartJsOptions} />
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmarkData: PropTypes.shape({}).isRequired,
  overviewMode: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Graphs);
