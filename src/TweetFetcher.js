import axios from 'axios';
import Twitter from 'twitter';

import { getCredential } from './TwitterCredentialsSaver';

async function getTrumpCriticizesTrumpPostsData() {
  return axios.get('https://www.reddit.com/r/TrumpCriticizesTrump/top.json?limit=1000&t=all');
}

async function getTweet(id) {
  const client = new Twitter({
    consumer_key: await getCredential('TwitterConsumerKey'),
    consumer_secret: await getCredential('TwitterConsumerSecret'),
    access_token_key: await getCredential('TwitterAccessTokenKey'),
    access_token_secret: await getCredential('TwitterAccessTokenSecret'),
  });
  return new Promise((resolve, reject) => {
    const parameters = { screen_name: 'realDonaldTrump', id, tweet_mode: 'extended' };
    client.get('statuses/show', parameters, (error, tweet, _response) => { // eslint-disable-line no-unused-vars
      if (error) {
        reject(error);
      } else {
        resolve(tweet);
      }
    });
  });
}

const getTweetId = tweetURL => (tweetURL.match(/\/status\/(\d+)/)[1]);

const getTwitterPosts = posts => (posts.filter(post => post.data.domain === 'twitter.com'));

async function getRandomTweet() {
  const data = await getTrumpCriticizesTrumpPostsData();
  const posts = getTwitterPosts(data.data.data.children);
  const randomIndex = Math.round(Math.random() * (posts.length - 1));
  const randomPost = posts[randomIndex];
  const tweet = await getTweet(getTweetId(randomPost.data.url));
  return tweet;
}

export {
  getRandomTweet,
  getTweetId,
  getTwitterPosts,
};
