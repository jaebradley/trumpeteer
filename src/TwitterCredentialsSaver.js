import inquirer from 'inquirer';
import keytar from 'keytar';

async function saveTwitterCredentials() {
  return inquirer.prompt([
    {
      name: 'twitterConsumerKey',
      message: 'Input your Twitter Consumer Key',
      validate: (str) => str.length !== 0,
      type: 'password',
    },
    {
      name: 'twitterConsumerSecret',
      message: 'Input your Twitter Consumer Secret',
      validate: (str) => str.length !== 0,
      type: 'password',
    },
    {
      name: 'twitterAccessTokenKey',
      message: 'Input your Twitter Access Token Key',
      validate: (str) => str.length !== 0,
      type: 'password',
    },
    {
      name: 'twitterAccessTokenSecret',
      message: 'Input your Twitter Access Token Secret',
      validate: (str) => str.length !== 0,
      type: 'password',
    },
  ]);
}

async function saveAnswer(key, value) {
  return keytar.setPassword('Trumpeteer', key, value);
}

async function getCredential(key) {
  return keytar.getPassword('Trumpeteer', key);
}

async function isMissingCredential() {
  return await getCredential('TwitterConsumerKey') === null
    || await getCredential('TwitterConsumerSecret') === null
    || await getCredential('TwitterAccessTokenKey') === null
    || await getCredential('TwitterAccessTokenSecret') === null;
}

async function saveAnswers() {
  const {
    twitterConsumerKey,
    twitterConsumerSecret,
    twitterAccessTokenKey,
    twitterAccessTokenSecret,
  } = await saveTwitterCredentials();
  await saveAnswer('TwitterConsumerKey', twitterConsumerKey);
  await saveAnswer('TwitterConsumerSecret', twitterConsumerSecret);
  await saveAnswer('TwitterAccessTokenKey', twitterAccessTokenKey);
  await saveAnswer('TwitterAccessTokenSecret', twitterAccessTokenSecret);
}

export {
  isMissingCredential,
  getCredential,
  saveAnswers,
};
