import parseReadableTweet from './ReadableTweetParser';

describe('#parseReadableTweet', () => {
  it('should parse readable portion of tweet', () => {
    const expected = ' foobar  baz';
    expect(parseReadableTweet('http://google.com foobar https://facebook.com baz')).toEqual(expected);
  });
});
