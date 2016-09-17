const browserify = require('browserify')
const livescript = require('browserify-livescript')
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
    .transform(livescript)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dist)
})
