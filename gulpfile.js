const gulp = require('gulp')
const util = require('gulp-util')
const config = require('./tasks/config')
const task = config.createTask(gulp, util, config.path)

const compileHTML = require('./tasks/compile-html')
const compileCSS = require('./tasks/compile-css')
const browserifyApp = require('./tasks/browserify-app')
const compileScripts = require('./tasks/compile-scripts')
const concatScripts = require('./tasks/concat-scripts')
const compressImages = require('./tasks/compress-images')

task('compile:html', compileHTML)
task('compile:css', compileCSS)
task('compile:scripts:app', compileScripts.app)
task('browserify:app', browserifyApp)
task('concat:scripts:vendor', concatScripts.vendor)
task('compress:images', compressImages)

gulp.task('watch', function() {
  gulp.watch(config.path.jade, ['compile:html']);
  gulp.watch(config.path.stylusDir, ['compile:css']);
  gulp.watch(config.path.scripts.modules.dir, ['browserify:app']);
  gulp.watch(config.path.scripts.dir, [
    'concat:scripts:vendor',
    'compile:scripts:app'
  ]);
  gulp.watch(config.path.imagesDir, ['compress:images']);
});

gulp.task('build', [
  'compile:html',
  'compile:css',
  'browserify:app',
  'compile:scripts:app',
  'concat:scripts:vendor',
  'compress:images'
]);

gulp.task('default', [
  'build',
  'watch'
]);
