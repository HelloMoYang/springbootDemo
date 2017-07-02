var del = require('del');

// config
var config = require('../../../config.js');

// options
var options = require('../../options/fonts.js');

module.exports = function (done) {
  del(config.destination.fonts + '/*/*.css', { force: true })
    .then(function () { done(); });
};
