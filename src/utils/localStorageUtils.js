const TTL = 1000 * 60 * 60 * 24; // 24 hours

export const getUnexpiredItem = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() - item.timestamp > TTL) {
    localStorage.removeItem(key);
    return null;
  }
  return item;
};

export const setOrUpdateItem = (key, benchmarks) => {
  const now = new Date();
  let item = getUnexpiredItem(key);
  item = item || { timestamp: now.getTime(), value: [] };
  item.value = [...benchmarks];
  localStorage.setItem(key, JSON.stringify(item));
};
