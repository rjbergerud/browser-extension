import * as raven from './raven';

let EXTENSION_CONFIG = {"buildType":"dev","apiUrl":"http://localhost:5000/api/","serviceUrl":"http://localhost:5000/","appType":"chrome-extension"};

// @ts-expect-error - `EXTENSION_CONFIG` is missing from types
if (EXTENSION_CONFIG.raven) {
  // @ts-expect-error - `EXTENSION_CONFIG` is missing from types
  raven.init(EXTENSION_CONFIG.raven);
}

import './hypothesis-chrome-extension';
import './install';
