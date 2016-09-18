const concat = require('gulp-concat')

exports.vendor = (gulp, util, path) => (() => {
  const src = [
    path.scripts.vendor
  ]

  const dist = gulp.dest(`${ path.dist }scripts`)

  return gulp
    .src(src)
    .pipe(concat("vendor.js"))
    .pipe(dist)
})
