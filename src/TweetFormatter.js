import moment from 'moment-timezone';

const formatCreatedAt = createdAt => (
  moment(new Date(createdAt))
    .tz(moment.tz.guess())
    .format('LLL z')
);

const generateTweetURL = id => (`https://twitter.com/realDonaldTrump/status/${id}`);

const formatTweet = tweet => (
  `${tweet.full_text}\n${formatCreatedAt(tweet.created_at)}\nLink: ${generateTweetURL(tweet.id_str)}`
);

export {
  formatTweet,
  generateTweetURL,
  formatCreatedAt,
};
