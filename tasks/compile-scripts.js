const babel = require('gulp-babel')
const concat = require('gulp-concat')

exports.app = (gulp, util, path) => (() => {
  const src = [
    path.scripts.app
  ]

  const dist = gulp.dest(`${ path.dist }scripts`)

  return gulp
    .src(src)
    .pipe(babel({
      presets: ['latest']
    }))
    .pipe(concat('app.js'))
    .pipe(dist)
})
