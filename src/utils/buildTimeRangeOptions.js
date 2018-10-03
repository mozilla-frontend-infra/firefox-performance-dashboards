import { TIME_RANGE_OPTIONS as OPTIONS } from '../config';

const computeTimeRangeLabel = (value) => {
  const multipleDays = value > 1;
  const dayCount = multipleDays ? `${value} ` : '';
  const pluralForm = multipleDays ? 's' : '';
  const timeRange = value === 365 ? 'year' : `${dayCount}day${pluralForm}`;
  return `Last ${timeRange}`;
};

const buildTimeRangeOptions = (selectedValue) => {
  const value = parseInt(selectedValue, 10);
  if (value && OPTIONS.indexOf(value) === -1) {
    OPTIONS.push(value);
    OPTIONS.sort((a, b) => a - b);
  }
  return OPTIONS.map(option => ({
    label: computeTimeRangeLabel(option),
    value: option.toString(),
  }));
};

export default buildTimeRangeOptions;
