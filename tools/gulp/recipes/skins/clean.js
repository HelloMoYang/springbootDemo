var del = require('del');

// config
var config = require('../../../config.js');

// options
var options = require('../../options/skins');

module.exports = function (done) {
  del(config.destination.skins + '/**/*.css', { force: true })
    .then(function () { done(); });
};
