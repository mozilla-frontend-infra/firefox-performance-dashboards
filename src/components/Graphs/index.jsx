import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const Legend = Loadable({
  loader: () => import(/* webpackChunkName: 'Legend' */ '../Legend'),
  loading: Loading,
});

const ChartJSWrapper = Loadable({
  loader: () => import(/* webpackChunkName: 'ChartJSWrapper' */ '../ChartJSWrapper'),
  loading: Loading,
});

const sortOverviewFirst = (a, b) => {
  if (a.includes('overview')) {
    return -1;
  }
  if (b.includes('overview')) {
    return 1;
  }
  return a <= b ? -1 : 1;
};

const styles = () => ({
  benchmarkTitle: {
    display: 'inline-block',
    margin: 10,
  },
  linkIcon: {
    marginBottom: -5,
  },
  benchmarkId: {
    textDecoration: 'none',
  },
});

const Graphs = ({
  classes, benchmarkData, overviewMode, platform,
}) => (
  <div>
    {!overviewMode
      && Object.values(benchmarkData.topLabelsConfig).map(
        ({
          color, label, suite, url,
        }) => label && (
        <Legend key={suite} label={label} labelColor={color}>
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                all subbenchmarks
          </a>
        </Legend>
        ),
      )}
    {Object.keys(benchmarkData.graphs)
      .sort(overviewMode ? undefined : sortOverviewFirst)
      .map(key => (
        {
          id: key,
          ...benchmarkData.graphs[key],
        }
      ))
      .map(({
        configUID, chartJsData, chartJsOptions, jointUrl, title, id,
      }) => (
        <div key={title}>
          <h2 className={classes.benchmarkTitle}>
            <a className={classes.benchmarkId} id={id} href={`#${id}`}> # </a>
            {title}
          </h2>
          <a href={jointUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon className={classes.linkIcon} />
          </a>
          {overviewMode ? (
            <Link to={`/${platform}/${configUID}?numDays=90`} rel="noopener noreferrer">
              <ArrowDownward className={classes.linkIcon} />
            </Link>
          ) : null}
          <ChartJSWrapper
            chartJsData={chartJsData}
            chartJsOptions={chartJsOptions}
          />
        </div>
      ))}
  </div>
);

Graphs.propTypes = {
  benchmarkData: PropTypes.shape({}).isRequired,
  overviewMode: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  platform: PropTypes.string.isRequired,
};

export default withStyles(styles)(Graphs);
