[![Build Status](https://travis-ci.org/jaebradley/trumpeteer.svg?branch=master)](https://travis-ci.org/jaebradley/trumpeteer)
[![codecov](https://codecov.io/gh/jaebradley/trumpeteer/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/trumpeteer)
[![npm_downloads](https://img.shields.io/npm/dt/trumpeteer.svg)](https://www.npmjs.com/package/trumpeteer)
[![npm](https://img.shields.io/npm/v/trumpeteer.svg)](https://www.npmjs.com/package/trumpeteer)
[![GitHub release](https://img.shields.io/github/release/jaebradley/trumpeteer.svg)](https://github.com/jaebradley/trumpeteer/releases)
[![license](https://img.shields.io/github/license/jaebradley/trumpeteer.svg)]()


# Trumpeteer

## Introduction
Get the worst of [`@realDonaldTrump`](https://twitter.com/realDonaldTrump) in your command line (and in your ears).

## Install
```bash
npm install trumpeteer -g
```

## Usage

### Step 1: Set Up Your Twitter Credentials

In order to read tweets, you need a `Consumer Key`, `Consumer Secret`, `Access Token Key`, and `Access Token Secret`.

You can get that credential information by creating a [Twitter App](https://apps.twitter.com/).

```bash
trumpeteer setup
```

The `setup` command will look something like
![alt-text](https://imgur.com/F4zFPnG.png)

`trumpeteer` uses [`node-keytar`](https://github.com/atom/node-keytar) to securely save the credential information (for example, using keychain for OSX).

### Step 2: Fetch (and Play) A Random Tweet

```bash
trumpeteer random
```

The `random` command will look something like
![alt-text](https://imgur.com/maZodWc.png)

`trumpeteer` uses [the `say` package](https://github.com/marak/say.js/) to output the tweet's text as audio.

## How Does It Work

It's pretty simple:

1. I cheat by using the [`TrumpCriticizesTrump` subreddit](https://www.reddit.com/r/TrumpCriticizesTrump) to essentially curate tweets
2. After filtering through the "top" Twitter posts
    * I pick one at random
    * Fetch metadata about the tweet from the Twitter API
    * Log the tweet's text to the console
    * "Play" the tweet's text using a text-to-speech API
