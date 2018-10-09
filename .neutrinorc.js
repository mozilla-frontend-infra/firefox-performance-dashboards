module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'JavaScript Performance Dashboard',
        },
        // Read https://stackoverflow.com/a/36623117
        // This is the key to making React Router work with neutrino
        // Fix issue with nested routes e.g /index/garbage
        publicPath: '/',
      },
    ],
    '@neutrinojs/jest',
  ],
};
