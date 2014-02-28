Simple development env for static sites and single page apps using [gulp](http://gulpjs.com/), [jade](http://jade-lang.com/) and [stylus](http://learnboost.github.io/stylus/).

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

### initiating

Start vagrant to create the vm and install all dependencies

```
$ vagrant up
```

Run `npm install` inside vagrant to install modules dependencies

```
$ vagrant ssh
$ cd /vagrant
$ npm install
```

### using

Compiling jade:

```
$ gulp compile:html
```

Compiling stylus:

```
$ gulp compile:css
```

concating scripts:

```
$ gulp concat:scripts:app
$ gulp concat:scripts:vendor
```

Building:

```
$ gulp build
```

Watching files modifications:

```
$ gulp
```
