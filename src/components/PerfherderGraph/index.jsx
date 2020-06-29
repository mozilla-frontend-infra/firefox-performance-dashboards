import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core/styles';
import { parse, stringify } from 'query-string';
import Loadable from 'react-loadable';
import Loading from '../Loading';
import CircularIndeterminate from '../CircularIndeterminate';
import queryPerfData from '../../utils/perfherder';
import { generateChartJsOptions, dataToChartJSformat } from '../../utils/chartJs';
import { convertToSeconds } from '../../utils/timeRangeUtils';

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

const options = (dayRange, includeSubtests) => ({
  timeRange: convertToSeconds(dayRange), includeSubtests,
});

// There's a bug in perf-goggles that gives us the wrong timerange
const fixUrl = (url, dayRange) => {
  // There's a bug in query-string that makes it hard to parse Perf urls
  const [baseUrl, queryString] = url.split('?');
  const parsedStrings = parse(queryString);
  // We overwrite the old timerange
  parsedStrings.timerange = convertToSeconds(dayRange);
  const newParams = stringify(parsedStrings, { encode: false, sort: false });
  return `${baseUrl}?${newParams}`;
};

class PerfherderGraph extends React.Component {
  state = {
    data: {},
    fetchedData: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { dayRange, includeSubtests, series } = this.props;
    if (
      dayRange !== prevProps.dayRange
      || includeSubtests !== prevProps.includeSubtests
      || series !== prevProps.series
    ) {
      this.fetchData();
    }
  }

  async fetchData() {
    let chartJsOptions;
    const {
      series, dayRange, includeSubtests, title, yLabel,
    } = this.props;
    this.setState({ data: {} });
    Promise.all(series.map(async (config) => {
      const response = await queryPerfData(config, options(dayRange, includeSubtests));
      this.setState({ fetchedData: true });
      // We can have multiple subtests for a single call to queryPerfData
      Object.values(response).forEach(({ data, meta, perfherderUrl }) => {
        const newUrl = fixUrl(perfherderUrl, dayRange);
        if (!chartJsOptions) {
          chartJsOptions = generateChartJsOptions(meta, yLabel);
        }
        const graphUid = meta.test || `${title}-overview`;
        // Considering includeSubtests is because glvideo has the 'test' property set
        const graphTitle = !includeSubtests ? title : meta.test || title;
        const dataStructure = {
          chartJsData: { datasets: [] },
          chartJsOptions,
          jointUrl: newUrl,
          title: graphTitle,
        };
        if (!meta.test) {
          dataStructure.overview = true;
        }
        this.setState((state) => {
          if (!state.data[graphUid]) {
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid] = dataStructure;
          } else {
            // We need to merge two different perfherder URLs
            // We're joining the different series for each subbenchmark
            const queryString = newUrl.split('?')[1];
            const parsedUrl = parse(queryString);
            // eslint-disable-next-line no-param-reassign
            state.data[graphUid].jointUrl += `&series=${parsedUrl.series}`;
          }
          let combined = false;
          // This is useful when we want to combine different series. For instance, a benchmark
          // changes the platform on which it runs, thus, requirying to merge data from both
          state.data[graphUid].chartJsData.datasets.forEach((dataset) => {
            if (dataset.label === config.label) {
              // eslint-disable-next-line no-param-reassign
              dataset.data = dataset.data.concat(dataToChartJSformat(data));
              combined = true;
            }
          });
          if (!combined) {
            state.data[graphUid].chartJsData.datasets.push({
              label: config.label,
              backgroundColor: config.color,
              data: dataToChartJSformat(data),
            });
          }
          return state;
        });
      });
    }));
  }

  render() {
    const { classes, extraLink } = this.props;
    const { data, fetchedData } = this.state;
    return (
      <div>
        {!fetchedData && <CircularIndeterminate />}
        {Object.values(data).sort(sortOverviewFirst).map(({
          chartJsData, chartJsOptions, jointUrl, title, overview,
        }) => (
          <div key={title}>
            <h2 className={classes.benchmarkTitle}>{title}</h2>
            <a href={jointUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon className={classes.linkIcon} />
            </a>
            {extraLink && overview ? (
              <Link to={extraLink} rel="noopener noreferrer">
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
  }
}

PerfherderGraph.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  extraLink: PropTypes.string,
  dayRange: PropTypes.number.isRequired,
  includeSubtests: PropTypes.bool,
  series: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    frameworkId: PropTypes.number.isRequired,
    option: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
  yLabel: PropTypes.string,
};

PerfherderGraph.defaultProps = {
  extraLink: undefined,
  includeSubtests: false,
  yLabel: undefined,
};

export default withStyles(styles)(PerfherderGraph);
