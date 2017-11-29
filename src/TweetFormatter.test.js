import moment from 'moment-timezone';
import TweetFormatter from './TweetFormatter';


describe('TweetFormatter', () => {
  describe('#generateTweetURL', () => {
    it('should generate tweet URL', () => {
      expect(TweetFormatter.generateTweetURL('id')).toEqual('https://twitter.com/realDonaldTrump/status/id');
    });
  });

  describe('#formatCreatedAt', () => {
    it('should return invalid parsed value for invalid date string', () => {
      expect(TweetFormatter.formatCreatedAt('foobar')).toEqual('Invalid date');
    });

    it('should return valid parsed value for valid date string', () => {
      moment.tz.guess = jest.fn();
      moment.tz.guess.mockReturnValue('UTC');
      expect(TweetFormatter.formatCreatedAt('11/28/2017')).toEqual('November 28, 2017 5:00 AM UTC');
    });
  });

  describe('#formatTweet', () => {
    it('should return formatted tweet', () => {
      TweetFormatter.generateTweetURL = jest.fn();
      TweetFormatter.formatCreatedAt = jest.fn();
      TweetFormatter.generateTweetURL.mockReturnValue('tweetURL');
      TweetFormatter.formatCreatedAt.mockReturnValue('createdAt');
      const tweet = { full_text: 'fullText', created_at: 'createdAt', id_str: 'idString' };
      expect(TweetFormatter.formatTweet(tweet)).toEqual('fullText\ncreatedAt\nLink: tweetURL');
    });
  });
});
