const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

module.exports = (gulp, util, path) => (() => {
  const src = [
    path.scripts.modules.main
  ]

  const dist = gulp.dest(`${ path.dist }scripts`)

  return browserify({
      entries: src,
      extensions: ['.ls'],
      debug: true,
      insertGlobals: true
    })
    .transform(babelify, {
      presets: ['latest']
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(dist)
})
