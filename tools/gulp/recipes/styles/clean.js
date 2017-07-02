var del = require('del');

// config
var config = require('../../../config.js');

// options
var options = require('../../options/styles.js');

module.exports = function (done) {
  del(config.destination.css + '/**/*.css', { force: true })
    .then(function () { done(); });
};
