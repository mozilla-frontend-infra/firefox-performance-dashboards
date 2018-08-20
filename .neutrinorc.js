module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'js-perf-dashboard'
        }
      }
    ],
    '@neutrinojs/jest',
    (neutrino) => {
      // Read https://stackoverflow.com/a/36623117
      // This is the key to making React Router work with neutrino
      // Fixes issue with nested routes e.g /index/garbage
      neutrino.config.output.publicPath('/');
    }
  ]
};
