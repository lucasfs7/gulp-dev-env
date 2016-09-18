exports.path = {
  layouts: './src/layouts/**/*.jade',
  jade: './src/**/*.jade',
  stylus: './src/stylus/*.styl',
  stylusDir: './src/stylus/',
  scripts: {
    dir: './src/scripts/',
    app: './src/scripts/app/**/*.js',
    vendor: './src/scripts/vendor/**/*.js',
    modules: {
      dir: './src/modules/',
      entry: './src/modules/app.js',
    }
  },
  imagesDir: './src/images/',
  images: [
    './src/images/**/*.jpg',
    './src/images/**/*.png',
    './src/images/**/*.gif',
    './src/images/**/*.svg'
  ],
  dist: './build/'
}

exports.createTask = (gulp, util, path) => (...args) => {
  const fn = args.pop()
  return gulp.task(...args, fn(gulp, util, path))
}
