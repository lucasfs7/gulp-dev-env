var gulp = require('gulp');
var util = require('gulp-util');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

var path = {
  layouts: './src/layouts/**/*.jade',
  jade: './src/**/*.jade',
  stylus: './src/stylus/*.styl',
  stylusAll: './src/stylus/**/*.styl',
  scripts: {
    app: './src/scripts/app/**/*.js',
    vendor: './src/scripts/vendor/**/*.js'
  },
  images: [
    './src/images/**/*.jpg',
    './src/images/**/*.png',
    './src/images/**/*.gif'
  ]
};

gulp.task('compile:html', function() {
  gulp.src([path.jade, '!'+path.layouts])
    .pipe(jade())
    .pipe(gulp.dest('./build/'))
});

gulp.task('compile:css', function () {
  gulp.src(path.stylus)
    .pipe(stylus({
      set:['compress'],
      use: ['nib']
    }))
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('concat:scripts:app', function() {
  gulp.src(path.scripts.app)
    .pipe(concat("app.js"))
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest('./build/scripts/'))
});

gulp.task('concat:scripts:vendor', function() {
  gulp.src(path.scripts.vendor)
    .pipe(concat("vendor.js"))
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest('./build/scripts/'))
});

gulp.task('compress:images', function() {
  gulp.src(path.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images/'));
});

gulp.task('build', ['compile:html', 'compile:css', 'concat:scripts:app', 'concat:scripts:vendor', 'compress:images']);

gulp.task('watch', function() {
  gulp.watch(path.jade, ['compile:html']);
  gulp.watch(path.stylusAll, ['compile:css']);
  gulp.watch(path.scripts.app, ['concat:scripts:app']);
  gulp.watch(path.scripts.vendor, ['concat:scripts:vendor']);
  gulp.watch(path.images, ['compress:images']);
});

gulp.task('default', ['build', 'watch']);
