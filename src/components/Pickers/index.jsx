import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../Picker';
import { BENCHMARKS, CONFIG } from '../../config';
import buildTimeRangeOptions from '../../utils/buildTimeRangeOptions';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
});

const Pickers = ({
  classes, benchmark, onChange, platform, timeRange,
}) => (
  <div className={classes.root}>
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChange}
      selectedValue={platform}
      options={
        Object.keys(CONFIG.platforms).reduce((res, platformKey) => {
          res.push({ value: platformKey, label: CONFIG.platforms[platformKey].label });
          return res;
        }, [])
      }
    />
    <Picker
      key="Time range"
      identifier="timeRange"
      topLabel="Time range"
      onSelection={onChange}
      selectedValue={timeRange}
      options={buildTimeRangeOptions(timeRange)}
    />
    <Picker
      key="Benchmark selection"
      identifier="benchmark"
      topLabel="Benchmark"
      onSelection={onChange}
      selectedValue={benchmark}
      options={
        CONFIG.platforms[platform].benchmarks.sort().reduce((res, benchmarkKey) => {
          res.push({
            value: benchmarkKey,
            label: BENCHMARKS[benchmarkKey].label,
          });
          return res;
        }, [{ value: 'overview', label: 'Overview' }])
      }
    />
  </div>
);

Pickers.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
  timeRange: PropTypes.string.isRequired,
});

export default withStyles(styles)(Pickers);
