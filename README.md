Simple development env for static sites and single page apps using [gulp](http://gulpjs.com/), [jade](http://jade-lang.com/), [stylus](http://learnboost.github.io/stylus/) and [coffee script](http://coffeescript.org/).

---

Read the article about this [here](http://lucasfsouza.com.br/blog/articles/apenas-mais-um-ambiente-frontend/) - PT/BR

---

### expected directory structure

```
project
  |_ src
      |_ stylus
      |_ coffee
      |_ vendor
          |_ scripts
  |_ build
      |_ scripts
      |_ stylesheets
```

### initiating

Start vagrant to create the vm and install all dependencies

```
$ vagrant up
$ vagrant ssh
```

Run `npm install` inside vagrant to install modules dependencies

```
$ vagrant ssh
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

Compiling coffe script:

```
$ gulp compile:javascript
```

Building:

```
$ gulp build
```

Watching files modifications:

```
$ gulp
```
