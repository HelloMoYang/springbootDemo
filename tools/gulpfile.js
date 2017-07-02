var gulp = require('gulp');
var gutil = require('gulp-util');
var sequence = require('run-sequence');
var notify = require('gulp-notify');


// utils
var lazyQuire = require('./gulp/utils/lazyQuire');
var pumped = require('./gulp/utils/pumped');
var notifaker = require('./gulp/utils/notifaker');

// config
var config = require('./config.js');

// gulpfile booting message
gutil.log(gutil.colors.green('Starting to Gulp! Please wait...'));


/**
 * CSS distribution
 */
gulp.task('styles:clean', [], lazyQuire(require, './gulp/recipes/styles/clean'));

gulp.task('styles:bootstrap', [], lazyQuire(require, './gulp/recipes/styles/bootstrap'));
gulp.task('styles:site', [], lazyQuire(require, './gulp/recipes/styles/site'));
gulp.task('styles:extend', [], lazyQuire(require, './gulp/recipes/styles/extend'));

gulp.task('dist-css', function (done) {
    sequence('styles:clean', 'styles:bootstrap', 'styles:site', 'styles:extend', function () {
        done();
        notifaker(pumped('CSS Generated!'));
    });
});


/**
 * Fonts distribution
 */
gulp.task('fonts:clean', [], lazyQuire(require, './gulp/recipes/fonts/clean'));
gulp.task('fonts:styles', [], lazyQuire(require, './gulp/recipes/fonts/styles'));

gulp.task('dist-fonts', function (done) {
    sequence('fonts:clean', 'fonts:styles', function () {
        done();

        notifaker(pumped('Fonts Generated!'));
    });
});

/**
 * Vendor distribution
 */
gulp.task('vendor:clean', [], lazyQuire(require, './gulp/recipes/vendor/clean'));
gulp.task('vendor:styles', [], lazyQuire(require, './gulp/recipes/vendor/styles'));

gulp.task('dist-vendor', function (done) {
    sequence('vendor:clean', 'vendor:styles', function () {
        done();

        notifaker(pumped('Vendor Generated!'));
    });
});

/**
 * Skins distribution
 */
gulp.task('skins:clean', [], lazyQuire(require, './gulp/recipes/skins/clean'));
gulp.task('skins:styles', [], lazyQuire(require, './gulp/recipes/skins/styles'));

gulp.task('dist-skins', function (done) {
    sequence('skins:clean', 'skins:styles', function () {
        done();

        notifaker(pumped('Skins Generated!'));
    });
});


/**
 * deploy
 */
gulp.task('deploy:clean', [], lazyQuire(require, './gulp/recipes/deploy/clean'));
gulp.task('deploy', [], lazyQuire(require, './gulp/recipes/deploy/deploy'));

// gulp.task('dist-skins', function (done) {
//     sequence('skins:clean', 'skins:styles', function () {
//         done();

//         notifaker(pumped('Skins Generated!'));
//     });
// });

/**
 * Default
 */
// gulp.task('default', ['dist-css']);
