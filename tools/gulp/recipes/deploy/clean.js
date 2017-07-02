var del = require('del');

// config
var config = require('../../../config.js');

module.exports = function (done) {
    del([config.webpack.path.pub + '/bundle/**', config.webpack.path.pub + '/img/**', , config.webpack.path.pub + '/index.html'], { force: true })
        .then(function () { done(); });
};
