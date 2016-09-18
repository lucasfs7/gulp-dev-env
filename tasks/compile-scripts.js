const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')

exports.app = (gulp, util, path) => (() => {
  const src = [
    path.scripts.app
  ]

  const dist = gulp.dest(`${ path.dist }scripts`)

  return gulp
    .src(src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['latest']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(dist)
})
