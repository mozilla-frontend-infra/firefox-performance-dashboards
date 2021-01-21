import fetchAndCache from '../src/utils/fetchAndCache';
import fetchWrapper from '../src/utils/fetchWrapper';

jest.mock('../src/utils/fetchWrapper');


describe('fetchAndCache', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  class Response {
    constructor(body, opts) {
      this.body = body;
      if (opts.headers) {
        this.headers = {
          get(key) {
            return opts.headers[key];
          },
        };
      }
    }

    clone() {
      return this;
    }
  }

  it('directly fetches if cache is not supported', async () => {
    fetchWrapper.mockImplementation(() => Promise.resolve('FOO'));
    const res = await fetchAndCache('http://example.com');
    expect(fetchWrapper).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe('FOO');
  });

  it('returns cached response if available and not stale', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() + 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => mockResponse }),
    };
    fetchWrapper.mockImplementation(() => Promise.resolve('I SHOULD NOT BE RESOLVED'));

    const res = await fetchAndCache('http://example.com');
    expect(res).toBe(mockResponse);
    expect(fetchWrapper).not.toHaveBeenCalled();
  });

  it('calls fetch if there is no cached copy', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() + 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => undefined }),
    };

    fetchWrapper.mockImplementation(() => Promise.resolve(mockResponse));

    const res = await fetchAndCache('http://example.com', 10);
    expect(fetchWrapper).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe(mockResponse);
  });

  it('calls fetch if cached copy is stale', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() - 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => mockResponse }),
    };
    fetchWrapper.mockImplementation(() => Promise.resolve('MOCK'));

    const res = await fetchAndCache('http://example.com', 10);
    expect(fetchWrapper).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe('MOCK');
  });
});
