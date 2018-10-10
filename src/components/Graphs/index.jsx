import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Legend from '../Legend';
import ChartJSWrapper from '../ChartJSWrapper';

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

const Graphs = ({
  classes,
  benchmarkData,
  overviewMode,
  platform,
  benchmark,
}) => (
  <div>
    {!overviewMode
      && Object.values(benchmarkData.topLabelsConfig).map(({
        color, label, suite, url,
      }) => (
        label
          && (
          <Legend
            key={suite}
            label={label}
            labelColor={color}
          >
            <a key={url} href={url} target="_blank" rel="noopener noreferrer">
               all subbenchmarks
            </a>
          </Legend>
          )
      ))
    }
    {Object.keys(benchmarkData.graphs)
      .sort(overviewMode ? undefined : sortOverviewFirst)
      .map(key => benchmarkData.graphs[key])
      .map(({
        chartJsData, chartJsOptions, jointUrl, title,
      }) => (
        <div key={title}>
          <h2 className={classes.benchmarkTitle}>{title}</h2>
          <a href={jointUrl} target="_blank" rel="noopener noreferrer"><LinkIcon className={classes.linkIcon} /></a>
          <a href={`/${platform}/${benchmark}`} rel="noopener noreferrer"><ArrowDownward className={classes.linkIcon} /></a>
          <ChartJSWrapper chartJsData={chartJsData} chartJsOptions={chartJsOptions} />
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmarkData: PropTypes.shape({}).isRequired,
  overviewMode: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  platform: PropTypes.string.isRequired,
  benchmark: PropTypes.string.isRequired,
};

export default withStyles(styles)(Graphs);
