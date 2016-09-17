const jade = require('gulp-jade')
const defineModule = require('gulp-define-module')

module.exports = (gulp, util, path) => (() => {
  const src = [
    path.scripts.modules.templates
  ]

  const dist = gulp.dest(path.scripts.modules.templatesDir)

  return gulp
    .src(src)
    .pipe(jade({ client: true }))
    .pipe(defineModule('node'))
    .pipe(dist)
})
