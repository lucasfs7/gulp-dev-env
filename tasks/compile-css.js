const stylus = require('gulp-stylus')

module.exports = (gulp, util, path) => (() => {
  const src = [
    path.stylus
  ]

  const dist = gulp.dest(`${ path.dist }stylesheets`)

  return gulp
    .src(src)
    .pipe(stylus({ use: [] }))
    .pipe(dist)
})
