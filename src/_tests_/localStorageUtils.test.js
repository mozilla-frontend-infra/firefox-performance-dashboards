import { getUnexpiredItem } from '../utils/localStorageUtils';

it('Local storage item is remove if expired', () => {
  const key = 'foo';
  const now = new Date();
  const oneDayAgo = 1000 * 60 * 60 * 25; // 25 hours ago
  const timestamp = now.getTime() - oneDayAgo;

  localStorage.setItem(key, JSON.stringify({ timestamp, value: [] }));

  let itemFromLocalStorage = localStorage.getItem(key);
  expect(itemFromLocalStorage).not.toBeNull();

  const item = getUnexpiredItem(key);

  itemFromLocalStorage = localStorage.getItem(key);
  expect(item).toBeNull();
  expect(itemFromLocalStorage).toBeNull();
});

it('Unexpired local storage item are not removed', () => {
  const key = 'foo';
  const now = new Date();
  const validTimestamp = 1000 * 60 * 60 * 23; // 23 hours ago
  const timestamp = now.getTime() - validTimestamp;

  const value = JSON.stringify({ timestamp, value: [] });
  localStorage.setItem(key, value);

  let itemFromLocalStorage = localStorage.getItem(key);
  expect(itemFromLocalStorage).not.toBeNull();

  const item = getUnexpiredItem(key);
  itemFromLocalStorage = localStorage.getItem(key);
  expect(item).not.toBeNull();
  expect(item).toStrictEqual(JSON.parse(value));
  expect(itemFromLocalStorage).not.toBeNull();
  expect(itemFromLocalStorage).toStrictEqual(value);
});
