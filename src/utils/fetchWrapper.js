import fetch from 'node-fetch';

jest.mock('node-fetch', () =>
  jest.fn((url) => {
    console.log('Mock fetch called with:', url);

    return Promise.resolve({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({ message: 'Hello, world!' }),
      text: async () =>
        JSON.stringify({ message: 'This is real mocked data!' }),
    });
  }),
);

export const promiseCache = {};
/**
 * Simple wrapper over fetch, for avoiding duplicate API calls
 * @param url
 */
const fetchWrapper = async (url) => {
  if (promiseCache[url]) {
    const cachedResponse = await promiseCache[url];
    return cachedResponse.clone();
  }

  try {
    // Fetch and store the response in cache
    const fetchPromise = fetch(url).then((res) => {
      if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
      const cloned = res.clone();
      return cloned;
    });

    promiseCache[url] = fetchPromise;

    const response = await fetchPromise;
    delete promiseCache[url];

    //required to clone the Response object, to allow it to be reused
    return response;
  } catch (err) {
    delete promiseCache[url];
    throw err;
  }
};

export default fetchWrapper;
