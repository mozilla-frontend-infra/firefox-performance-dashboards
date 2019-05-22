import { transformPlatform } from '../../src/utils/fetchData';

it('Platorm for Chromium', () => {
  const platform = transformPlatform('raptor-motionmark-animometer-chromium', 'windows10-64');
  expect(platform).toEqual('windows10-64-shippable');
});

it('Platorm for Firefox', () => {
  const platform = transformPlatform('raptor-motionmark-animometer-firefox', 'windows10-64');
  expect(platform).toEqual('windows10-64');
});
