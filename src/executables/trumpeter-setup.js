#!/usr/bin/env node

/* eslint-disable no-console */

import { saveAnswers } from '../TwitterCredentialsSaver';
import formattedErrorMessage from '../constants';

try {
  saveAnswers();
} catch (e) {
  console.error(formattedErrorMessage(e));
}
