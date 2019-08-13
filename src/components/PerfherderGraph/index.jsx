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
    const { series, options } = this.props;
    Object.values(series).forEach(async (config) => {
      const response = await queryPerfData(config, options);

      // We can have multiple subtests for a single call to queryPerfData
      Object.values(response).forEach((info) => {
        if (!chartJsOptions) {
          chartJsOptions = generateChartJsOptions(info.meta);
        }
        // XXX: Need to fix this later
        const graphUid = info.meta.has_subtests ? 'overview' : config.label;
        this.setState((state) => {
          if (!state.data[graphUid]) {
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid] = {
              chartJsData: { datasets: [] },
              chartJsOptions,
              jointUrl: info.perfherderUrl,
            };
          } else {
            // We need to merge two different perfherder URLs
            // We're joining the different series for each subbenchmark
            const parsedUrl = parse(info.perfherderUrl);
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid].jointUrl += `&series=${parsedUrl.series}`;
          }
          state.data[graphUid].chartJsData.datasets.push({
            label: config.label,
            backgroundColor: config.color,
            data: dataToChartJSformat(info.data),
          });
          return state;
        });
      });
    });
  }

  render() {
    const { classes, title, extraLink } = this.props;
    const { data } = this.state;
    return (
      Object.entries(data).map(([key, { chartJsData, chartJsOptions, jointUrl }]) => (
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
            key={key}
            chartJsData={chartJsData}
            chartJsOptions={chartJsOptions}
          />
        </div>
      ))
    );
  }
}

export default withStyles(styles)(PerferhderGraph);
