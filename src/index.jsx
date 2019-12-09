import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

Raven.config(
  'https://7d4b85013ba648c0bd32ce069fde5755@sentry.io/1851579',
).install();

ReactDOM.render(<Router />, document.getElementById('root'));
