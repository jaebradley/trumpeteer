#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Listen to some random Trump tweets')
  .command('setup', 'add Twitter credentials')
  .command('random', 'Here is a random Trump tweet')
  .parse(process.argv);
