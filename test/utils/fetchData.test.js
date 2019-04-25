import { transformPlatform } from '../../src/utils/fetchData';

it('Platorm for Chrome', () => {
  const platform = transformPlatform('raptor-motionmark-animometer-chrome', 'windows10-64');
  expect(platform).toEqual('windows10-64-nightly');
});

it('Platorm for Firefox', () => {
  const platform = transformPlatform('raptor-motionmark-animometer-firefox', 'windows10-64');
  expect(platform).toEqual('windows10-64');
});
