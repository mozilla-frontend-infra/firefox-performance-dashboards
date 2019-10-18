import fetchAndCache from '../src/utils/fetchAndCache';

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
    global.fetch = jest.fn(() => Promise.resolve('FOO'));
    const res = await fetchAndCache('http://example.com');
    expect(global.fetch).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe('FOO');
  });

  it('returns cached response if available and not stale', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() + 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => mockResponse }),
    };
    global.fetch = jest.fn(() => Promise.resolve('I SHOULD NOT BE RESOLVED'));

    const res = await fetchAndCache('http://example.com');
    expect(res).toBe(mockResponse);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('calls fetch if there is no cached copy', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() + 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => undefined }),
    };

    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    const res = await fetchAndCache('http://example.com', 10);
    expect(global.fetch).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe(mockResponse);
  });

  it('calls fetch if cached copy is stale', async () => {
    const mockResponse = new Response('FOO', {
      headers: { Expires: Date.now() - 10000 },
    });
    global.caches = {
      open: async () => ({ match: async () => mockResponse }),
    };
    global.fetch = jest.fn(() => Promise.resolve('MOCK'));

    const res = await fetchAndCache('http://example.com', 10);
    expect(global.fetch).toHaveBeenLastCalledWith('http://example.com');
    expect(res).toBe('MOCK');
  });
});
