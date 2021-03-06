'use strict';
const fetch = require('isomorphic-fetch');
const nightlyURL = 'https://nodejs.org/download/nightly/index.tab';

module.exports = function () {
  return fetch(nightlyURL)
    .then(resp => resp.text())
    .then(text => text.split('\n')[1].split('\t')[0])
}
