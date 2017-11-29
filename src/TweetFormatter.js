import moment from 'moment-timezone';

class TweetFormatter {
  static formatCreatedAt(createdAt) {
    return moment(new Date(createdAt))
      .tz(moment.tz.guess())
      .format('LLL z');
  }

  static generateTweetURL(id) { return `https://twitter.com/realDonaldTrump/status/${id}`; }

  static formatTweet(tweet) {
    return `${tweet.full_text}\n${TweetFormatter.formatCreatedAt(tweet.created_at)}\nLink: ${TweetFormatter.generateTweetURL(tweet.id_str)}`;
  }
}

export default TweetFormatter;
