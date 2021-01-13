export const getUnexpiredItem = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item;
};

export const setOrUpdateItem = (key, benchmarkUID) => {
  const now = new Date();
  const ttl = 1000 * 60 * 60 * 24; // 24 hours

  let item = getUnexpiredItem(key);

  item = item || { expiry: now.getTime() + ttl, value: [] };

  if (!item.value.includes(benchmarkUID)) {
    item.value.push(benchmarkUID);
  }

  localStorage.setItem(key, JSON.stringify(item));
};
