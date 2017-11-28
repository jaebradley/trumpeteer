import moment from 'moment-timezone';

const formatCreatedAt = createdAt => (
  moment(new Date(createdAt))
    .tz(moment.tz.guess())
    .format('LLL z')
);

const generateTweetURL = id => (`https://twitter.com/realDonaldTrump/${id}`);

const formatTweet = tweet => (
  `${tweet.full_text}\n${formatCreatedAt(tweet.created_at)}\nLink: ${generateTweetURL(tweet.id)}`
);

export {
  formatTweet,
  generateTweetURL,
  formatCreatedAt,
};
