import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
import { subbenchmarksData } from '@mozilla-frontend-infra/perf-goggles';
import axios from 'axios';
import { parse } from 'query-string';
// import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import CONFIG from '../../config';
import prepareData from '../../utils/prepareData';
import './benchmark.css';

export default class Benchmark extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = this.queryParams();
  }

  state = {
    benchmarkData: null,
  }

  async componentDidMount() {
    const { platform, benchmark } = this.queryParams();
    this.fetchData(platform, benchmark);
  }

  async onChange(event) {
    event.preventDefault();
    // Clear the plotted graphs
    this.setState({ benchmarkData: null });
    let { platform, benchmark } = this.queryParams();
    if (event.target.name === 'platform') {
      platform = event.target.value;
      // When changing platforms we should switch to the 'overview' for it
      // redirection = `/?platform=${event.target.value}&benchmark=overview`;
    } else {
      benchmark = event.target.value;
      // redirection = `/?platform=${this.props.platform}&benchmark=${event.target.value}`;
    }
    const result = await axios.post('/', { platform, benchmark });
    console.log(result);
  }

  queryParams() {
    const {
      platform = 'win10',
      benchmark = 'motionmark-animometer', // XXX: Fix this
      // eslint-disable-next-line react/prop-types
    } = parse(this.props.location.search);
    return { platform, benchmark };
  }

  async fetchData(platform, benchmark) {
    const allData = {};
    const benchmarksToCompare = CONFIG[platform].benchmarks[benchmark].compare;
    await Promise.all(benchmarksToCompare.map(async (benchmarkKey) => {
      allData[benchmarkKey] = await subbenchmarksData(
        CONFIG[platform].frameworkId,
        CONFIG[platform].platform,
        benchmarkKey,
        CONFIG[platform].buildType,
      );
    }));
    this.setState({ benchmarkData: prepareData(allData) });
  }

  render() {
    const { benchmarkData } = this.state;
    const { platform, benchmark } = this.queryParams();

    return (
      <div>
        <Header
          benchmark={benchmark}
          platform={platform}
          onChange={this.onChange}
        />
        {benchmarkData && Object.keys(benchmarkData).length > 0 &&
          <div>
            <div>
              <h3>{CONFIG[platform].benchmarks[benchmark].label}</h3>
              {Object.entries(benchmarkData.benchmark.urls).map((entry) => {
                const browserKey = entry[0];
                const url = entry[1];
                const classname = `legend ${browserKey === 'firefox' ? 'firefox-color' : 'chrome-color'}`;
                const upperBrowser = browserKey.replace(/^\w/, c => c.toUpperCase());
                return (
                  <div key={url}>
                    <span className={classname} />
                    <span>{upperBrowser}:</span>
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer">all subbenchmarks</a>
                  </div>
                );
              })}
            </div>
            {Object.values(benchmarkData.subbenchmarks).map(({
              data, jointUrl, meta, testName,
            }) => (
              <div key={testName}>
                <h3>{testName}</h3>
                <a href={jointUrl} target="_blank" rel="noopener noreferrer">link</a>
                <MetricsGraphics
                  key={meta.test}
                  data={data}
                  x_accessor="datetime"
                  y_accessor="value"
                  min_y_from_data
                  full_width
                  right="60"
                  legend={['Firefox', 'Chrome']}
                  aggregate_rollover
                  interpolate={curveLinear}
                />
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}
