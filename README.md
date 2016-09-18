Simple development env for static sites and single page apps using [gulp](http://gulpjs.com/) for tasks, [jade](http://jade-lang.com/) for templates, [stylus](http://learnboost.github.io/stylus/) for CSS, babel for next gen javascript and [browserify](http://browserify.org/) to bundle modular script.

---

Read the article about this [here](http://lucasfsouza.com.br/blog/articles/apenas-mais-um-ambiente-frontend/) - PT/BR

---

### expected directory structure

```
project
  |_ src
      |_ layouts
      |_ stylus
      |_ scripts
          |_ app
          |_ vendor
  |_ build
      |_ scripts
      |_ stylesheets
```

### using

#### Default npm scripts:

Start dev server:
```
$ npm start
```

Start watching code:
```
$ npm run watch
```

Compile code:
```
$ npm run compile
```

#### Gulp tasks

Compiling jade:

```
$ gulp compile:html
```

Compiling stylus:

```
$ gulp compile:css
```

Concatenating vendor scripts:

```
$ gulp concat:scripts:vendor
```

Browserifing app scripts:

```
$ gulp browserify:app
```

Optimizing images:

```
$ gulp compress:images
```

Building:

```
$ gulp build
```

Watching files modifications:

```
$ gulp watch
```

Building and watching:

```
$ gulp
```
