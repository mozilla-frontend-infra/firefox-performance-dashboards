describe('fetchWrapper', () => {
  let fetchWrapper;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => import('../src/utils/fetchWrapper').then((module) => {
    fetchWrapper = module.default;
    jest.resetModules();
  }));

  class Response {
    constructor(body) {
      this.body = body;
    }

    clone() {
      return { ...this };
    }
  }

  it('should call fetch if the promise is not in cache', () => {
    global.fetch = jest.fn(() => new Promise(() => {
    }));
    fetchWrapper('http://example.com');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });


  it('should get the promise from cache', () => {
    global.fetch = jest.fn(() => new Promise(() => {
    }));
    fetchWrapper('http://example.com');
    fetchWrapper('http://example.com');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('should resolves with a cloned Response object ', () => {
    const mockResponse = new Response('foo');
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));
    return fetchWrapper('http://example.com').then((res) => {
      expect(res).not.toBe(mockResponse);
    });
  });
});
