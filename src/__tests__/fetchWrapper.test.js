/* eslint-disable jest/no-disabled-tests */
import fetchMock from 'jest-fetch-mock';
import fetch from 'node-fetch';
import fetchWrapper from '../utils/fetchWrapper';

jest.mock('node-fetch', () =>
  fetchMock.mockResponses([
    JSON.stringify({ message: 'Mocked response!' }),
    { status: 200 },
  ]),
);

describe('fetchWrapper', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
    fetch.resetMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  class Response {
    constructor(body) {
      this.body = body;
    }

    clone() {
      return { ...this };
    }
  }

  it('should call fetch if the promise is not in cache', async () => {
    const response = await fetch('https://example.com');
    console.log('Response: ', response);
    fetchWrapper('http://example.com');
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('should get the promise from cache', () => {
    fetch('http://example2.com/');
    fetchWrapper('http://example2.com');
    fetchWrapper('http://example2.com');
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it.skip('should resolves with a cloned Response object', () => {
    const mockResponse = new Response('foo');
    fetch.mock('http://example3.com', Promise.resolve(mockResponse));
    return fetchWrapper('http://example3.com').then((res) => {
      expect(res).not.toBe(mockResponse);
    });
  });

  it.skip('should remove the promise from cache when rejected', () => {
    fetch.mock('http://example4.com', { throw: new Error('Error') });
    return fetchWrapper('http://example4.com').catch(() => {
      fetchWrapper('http://example4.com');
      // eslint-disable-next-line jest/no-conditional-expect
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });
});
