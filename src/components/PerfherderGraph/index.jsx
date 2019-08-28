import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core/styles';
import { parse } from 'query-string';
import queryPerfData from '@mozilla-frontend-infra/perf-goggles';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import { generateChartJsOptions, dataToChartJSformat } from '../../utils/prepareData';


const ChartJSWrapper = Loadable({
  loader: () => import(/* webpackChunkName: 'ChartJSWrapper' */ '../ChartJSWrapper'),
  loading: Loading,
});

const sortOverviewFirst = (a, b) => {
  if (a.overview) {
    return -1;
  }
  if (b.overview) {
    return 1;
  }
  return a.title <= b.title ? -1 : 1;
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

class PerferhderGraph extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    extraLink: PropTypes.string,
    options: PropTypes.shape({}).isRequired,
    series: PropTypes.shape({}).isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    extraLink: undefined,
  };

  state = {
    data: {},
  };

  async componentDidMount() {
    let chartJsOptions;
    const { series, options, title } = this.props;
    Object.values(series).forEach(async (config) => {
      const response = await queryPerfData(config, options);

      // We can have multiple subtests for a single call to queryPerfData
      Object.values(response).forEach(({ data, meta, perfherderUrl }) => {
        if (!chartJsOptions) {
          chartJsOptions = generateChartJsOptions(meta);
        }
        // XXX: Need to fix this later
        const graphUid = meta.test || `${title}-overview`;
        const graphTitle = meta.test || title;
        this.setState((state) => {
          if (!state.data[graphUid]) {
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid] = {
              chartJsData: { datasets: [] },
              chartJsOptions,
              jointUrl: perfherderUrl,
              title: graphTitle,
            };
          } else {
            // We need to merge two different perfherder URLs
            // We're joining the different series for each subbenchmark
            const parsedUrl = parse(perfherderUrl);
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid].jointUrl += `&series=${parsedUrl.series}`;
          }
          state.data[graphUid].chartJsData.datasets.push({
            label: config.label,
            backgroundColor: config.color,
            data: dataToChartJSformat(data),
          });
          if (!meta.test) {
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid].overview = true;
          }
          return state;
        });
      });
    });
  }

  render() {
    const { classes, extraLink } = this.props;
    const { data } = this.state;
    return (
      Object.values(data).sort(sortOverviewFirst).map(({
        // eslint-disable-next-line
        chartJsData, chartJsOptions, jointUrl, title,
      }) => (
        <div key={title}>
          <h2 className={classes.benchmarkTitle}>{title}</h2>
          <a href={jointUrl} target="_blank" rel="noopener noreferrer">
            <LinkIcon className={classes.linkIcon} />
          </a>
          {extraLink ? (
            <Link to={extraLink} rel="noopener noreferrer">
              <ArrowDownward className={classes.linkIcon} />
            </Link>
          ) : null}
          <ChartJSWrapper
            chartJsData={chartJsData}
            chartJsOptions={chartJsOptions}
          />
        </div>
      ))
    );
  }
}

export default withStyles(styles)(PerferhderGraph);
