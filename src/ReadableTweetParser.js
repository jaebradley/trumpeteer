const parseReadableTweet = (text) => (
  text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
);

export default parseReadableTweet;
