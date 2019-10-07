export const convertToSeconds = (value) => parseInt(value, 10) * 24 * 3600;

export const generateLastDaysLabel = (numDays) => {
  const multipleDays = numDays > 1;
  const dayCount = multipleDays ? `${numDays} ` : '';
  const pluralForm = multipleDays ? 's' : '';
  const timeRange = numDays === 365 ? 'year' : `${dayCount}day${pluralForm}`;
  return `Last ${timeRange}`;
};
