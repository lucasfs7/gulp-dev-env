const imagemin = require('gulp-imagemin')

module.exports = (gulp, util, path) => (() => {
  const src = path.images
  const dist = gulp.dest(`${ path.dist }images`)

  return gulp
    .src(src)
    .pipe(imagemin())
    .pipe(dist)
})
