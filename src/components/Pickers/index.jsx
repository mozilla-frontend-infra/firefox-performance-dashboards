import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../Picker';
import MultipleSelectPicker from '../MultipleSelectPicker';
import { BENCHMARKS, CONFIG } from '../../config';
import { generateLastDaysLabel } from '../../utils/timeRangeUtils';
import { getUnexpiredItem } from '../../utils/localStorageUtils';

const styles = () => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    padding: '15px',
  },
});

const Pickers = ({
  classes, benchmark, category, onChange, platform,
  dayRange, labels, selectedLabels, onMultipleSelect,
}) => {
  const allSuites = CONFIG.views[platform].categories[category].suites;
  const itemKey = `(${platform}, ${category})`;
  const item = getUnexpiredItem(itemKey);
  const results = (item) ? item.value : allSuites;
  return (
    <div className={classes.root}>
      <Picker
        key="Platform selection"
        identifier="platform"
        topLabel="Platform"
        onSelection={onChange}
        selectedValue={platform}
        options={
        Object.keys(CONFIG.views).reduce((res, platformKey) => {
          res.push({ value: platformKey, label: CONFIG.views[platformKey].label });
          return res;
        }, [])
        }
      />
      <Picker
        key="Category selection"
        identifier="category"
        topLabel="Category"
        onSelection={onChange}
        selectedValue={category}
        options={
              Object.entries(CONFIG.views[platform].categories).map(
                ([catKey, catValue]) => ({ value: catKey, label: catValue.label }),
              )
          }
      />
      {CONFIG.views[platform].categories[category] && (
        <Picker
          key="Benchmark selection"
          identifier="results"
          topLabel="Results"
          onSelection={onChange}
          selectedValue={benchmark}
          options={
            results.sort().reduce((res, benchmarkKey) => {
              res.push({
                value: benchmarkKey,
                label: BENCHMARKS[benchmarkKey].label,
              });
              return res;
            }, [{ value: 'overview', label: 'Overview' }])
          }
        />
      ) }
      <Picker
        key="Time range"
        identifier="numDays"
        topLabel="Time range"
        onSelection={onChange}
        selectedValue={dayRange}
        options={CONFIG.dayRange.map((numDays) => ({
          value: numDays,
          label: generateLastDaysLabel(numDays),
        }))}
      />
     <MultipleSelectPicker
      identifier="series"
      labels={labels}
      selectedLabels={selectedLabels}
      onSelection={onChange}
      deselectAll={deselectAll}
    />
    </div>
  );
};

Pickers.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
  dayRange: PropTypes.number.isRequired,
});

export default withStyles(styles)(Pickers);
