var del = require('del');

// config
var config = require('../../../config.js');

// options
var options = require('../../options/vendor');

module.exports = function (done) {
  del(config.destination.vendor + '/*/*.css', { force: true })
    .then(function () { done(); });
};
