#!/usr/bin/env node

/* eslint-disable no-console */

import say from 'say';

import { saveAnswers, isMissingCredential } from '../TwitterCredentialsSaver';
import { getRandomTweet } from '../TweetFetcher';
import TweetFormatter from '../TweetFormatter';
import parseReadableTweet from '../ReadableTweetParser';
import formattedErrorMessage from '../constants';

async function executeCommand() {
  try {
    if (await isMissingCredential()) {
      await saveAnswers();
    }

    getRandomTweet().then((tweet) => {
      console.log(TweetFormatter.formatTweet(tweet));
      say.speak(parseReadableTweet(tweet.full_text), 'Alex', 1.1);
    }).catch((e) => console.error(formattedErrorMessage(e)));
  } catch (e) {
    console.error(formattedErrorMessage(e));
  }
}

try {
  executeCommand();
} catch (e) {
  console.error(formattedErrorMessage(e));
}
