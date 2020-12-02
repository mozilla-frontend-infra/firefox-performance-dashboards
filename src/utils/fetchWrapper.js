const fetch = require('node-fetch');

export const promiseCache = {};
/**
 * Simple wrapper over fetch, for avoiding duplicate API calls
 * @param url
 */
const fetchWrapper = (url) => {
  if (promiseCache[url]) {
    return promiseCache[url].then((res) => res.clone());
  }

  const fetchPromise = fetch(url);

  promiseCache[url] = fetchPromise
    .then((res) => {
      // once resolved, can be removed
      delete promiseCache[url];
      return res;
    })

    .catch((err) => {
      delete promiseCache[url];
      throw err;
    });

  // required to clone the Response object, to allow it to be reused
  return promiseCache[url].then((res) => res.clone());
};

export default fetchWrapper;
