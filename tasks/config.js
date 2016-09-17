exports.path = {
  layouts: './src/layouts/**/*.jade',
  jade: './src/**/*.jade',
  stylus: './src/stylus/*.styl',
  stylusAll: './src/stylus/**/*.styl',
  scripts: {
    app: './src/scripts/app/**/*.ls',
    vendor: './src/scripts/vendor/**/*.js',
    modules: {
      main: './src/scripts/app/main.ls',
      templates: './src/scripts/app/templates/**/*.jade',
      templatesDir: './src/scripts/app/templates/'
    }
  },
  images: [
    './src/images/**/*.jpg',
    './src/images/**/*.png',
    './src/images/**/*.gif'
  ],
  dist: './build/'
}

exports.createTask = (gulp, util, path) => (...args) => {
  const fn = args.pop()
  return gulp.task(...args, fn(gulp, util, path))
}
