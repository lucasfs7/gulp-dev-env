const jade = require('gulp-jade')

module.exports = (gulp, util, path) => (() => {
  const src = [
    path.jade,
    `!${ path.layouts }`,
    `!${ path.scripts.modules.templates }`
  ]

  const dist = gulp.dest(path.dist)

  return gulp
    .src(src)
    .pipe(jade())
    .pipe(dist)
})
