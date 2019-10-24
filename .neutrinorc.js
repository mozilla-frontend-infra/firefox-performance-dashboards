/* eslint-disable import/no-extraneous-dependencies */
const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        rules: {
          'react/prop-types': 0,
        },
      },
    }),
    react({
      html: {
        title: 'Firefox Performance Dashboard',
      },
      minify: {
        source: false,
      },
    }),
    jest(),
  ],
};
