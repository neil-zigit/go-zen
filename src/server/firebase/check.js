#!/usr/bin/env node

require('@babel/polyfill/noConflict');
require('@babel/register')();

const { default: check } = require('./migration');

check({ org: 'test', uuid: 'UNKNOWN' })
  .then(() => process.exit(1));
