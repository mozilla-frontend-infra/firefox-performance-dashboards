import hasSameExtraOptions from '../src/utils/extraOptionsUtils';


describe('hasSameExtraOptions', () => {
  it('should return true if extraOptions are undefined', async () => {
    const res = hasSameExtraOptions(undefined, undefined);
    expect(res).toBeTruthy();
  });

  it('should return true if extraOptions with ignored nocondprof', async () => {
    const res = hasSameExtraOptions(
      ['live', 'cold', 'nocondprof'],
      ['live', 'cold'],
      ['nocondprof'],
    );
    expect(res).toBeTruthy();
  });

  it('should return true if the order is different', async () => {
    const res = hasSameExtraOptions(
      ['cold', 'live'],
      ['live', 'cold'],
    );
    expect(res).toBeTruthy();
  });

  it('should return false if extraOptions do not match', async () => {
    const res = hasSameExtraOptions(
      ['warm', 'live'],
      ['live', 'cold'],
    );
    expect(res).toBeFalsy();
  });

  it('should return false if extraOptions do not match (with ignored)', async () => {
    const res = hasSameExtraOptions(
      ['warm', 'live', 'nocondprof'],
      ['live', 'cold'],
      ['nocondprof'],
    );
    expect(res).toBeFalsy();
  });

  it('should return true with unnecessary ignoredExtraOptions', async () => {
    const res = hasSameExtraOptions(
      ['cold', 'live'],
      ['live', 'cold'],
      ['nocondprof'],
    );
    expect(res).toBeTruthy();
  });
});
