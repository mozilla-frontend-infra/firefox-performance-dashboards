import prepareData from '../../src/utils/prepareData';

// These mocks are 1 day worth of data
const linux64FetchedData = require('../mocks/linux64/fetchedData.json');
const linux64PreparedData = require('../mocks/linux64/preparedData.json');

it('can format fetched data correctly', () => {
  const preparedData = prepareData(linux64FetchedData);
  expect(preparedData).toEqual(linux64PreparedData);
});
