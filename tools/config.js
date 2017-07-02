"use strict";

const path = require('path'),
    __basename = path.dirname(__dirname)

var config = {
    deploy: {
        host: '118.244.237.2',
        port: 22000,
        auth: 'hpe',
        remotePath: '/opt/baleina/mext/code/mext'
    },
    webpack: {
        path: {
            base: __basename,
            src: path.resolve(__basename, 'src'),
            dev: path.resolve(__basename, 'dev'),
            pub: path.resolve(__basename, 'dist'),
        },
    },
    source: {
        sass: path.resolve(__basename, 'src/style/scss'),
        fonts: path.resolve(__basename, 'src/style/fonts'),
        vendor: path.resolve(__basename, 'src/style/vendor'),
        skins: path.resolve(__basename, 'src/style/skins'),
    },
    destination: {
        css: path.resolve(__basename, 'assets/css'),
        fonts: path.resolve(__basename, 'assets/fonts'),
        vendor: path.resolve(__basename, 'assets/vendor'),
        skins: path.resolve(__basename, 'assets/skins'),
    },
    bootstrap: {
        sass: path.resolve(__basename, 'src/style/scss/bootstrap'),
        mixins: path.resolve(__basename, 'src/style/scss/mixins')
    },
    autoprefixerBrowsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
    ]
}
module.exports = config