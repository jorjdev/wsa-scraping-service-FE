const CONSTANTS = {
  URL_REGEX:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  SUPPORTED_DOMAINS: new Set([
    "https://wsa-test.vercel.app",
    "https://wsa-test.vercel.app/",
  ]),
  ERROR_STATE_MESSAGE: "The URL is not valid or we do not support it.",
  ALL_FILTERS_MESSAGE: "*Leave the boxes empty to fetch all possible fields.",
};

export default CONSTANTS;
