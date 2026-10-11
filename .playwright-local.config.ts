import config from './playwright.config';

export default {
  ...config,
  use: { ...config.use, baseURL: 'http://127.0.0.1:3000' },
  webServer: undefined,
};
