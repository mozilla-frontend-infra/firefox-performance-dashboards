import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

Raven.config(
  'https://a46514ae1f2d42cd83c10d1bb8f4141e@sentry.prod.mozaws.net/436',
).install();

ReactDOM.render(<Router />, document.getElementById('root'));
