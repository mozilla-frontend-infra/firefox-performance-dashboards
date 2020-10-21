const neutrino = require('neutrino');

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
process.env.DASHBOARD = process.env.DASHBOARD || 'h3';

module.exports = neutrino().jest();
