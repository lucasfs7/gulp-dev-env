const gulp = require('gulp')
const util = require('gulp-util')
const config = require('./tasks/config')
const task = config.createTask(gulp, util, config.path)

const compileHTML = require('./tasks/compile-html')
const compileCSS = require('./tasks/compile-css')
const browserifyApp = require('./tasks/browserify-app')
const concatScripts = require('./tasks/concat-scripts')
const compressImages = require('./tasks/compress-images')

task('compile:html', compileHTML)
task('compile:css', compileCSS)
task('browserify:app', browserifyApp)
task('concat:scripts:vendor', concatScripts.vendor)
task('compress:images', compressImages)

gulp.task('watch', function() {
  gulp.watch(config.path.jade, ['compile:html']);
  gulp.watch(config.path.stylusAll, ['compile:css']);
  gulp.watch(config.path.scripts.app, ['browserify:app']);
  gulp.watch(config.path.scripts.vendor, ['concat:scripts:vendor']);
  gulp.watch(config.path.images, ['compress:images']);
});

gulp.task('build', [
  'compile:html',
  'compile:css',
  'browserify:app',
  'concat:scripts:vendor',
  'compress:images'
]);

gulp.task('default', [
  'build',
  'watch'
]);
