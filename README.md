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

### Step 2: Fetch A Random Tweet

```bash
trumpeteer random
```

The `random` command will look something like
![alt-text](https://imgur.com/maZodWc.png)

## How Does It Work

It's pretty simple:

1. I cheat by using the [`TrumpCriticizesTrump` subreddit](https://www.reddit.com/r/TrumpCriticizesTrump) to essentially curate tweets
2. After filtering through the "top" Twitter posts
    * I pick one at random
    * Fetch metadata about the tweet from the Twitter API
    * Log the tweet's text to the console
    * "Play" the tweet's text using a text-to-speech API
