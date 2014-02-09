Simple development env for static sites and single page apps using gulp, jade, stylus and coffee script.

---

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
