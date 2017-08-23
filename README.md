# Plugin Pack

[Wordpress](https://en-au.wordpress.org/) plugin pack, running a
[Webpack](https://webpack.js.org/) build system. Features include browsersync,
ES6 & Babel.js and SASS.

## Prerequisites
* A local Wordpress install, running on MAMP
* Node.js & npm

If you're not familiar with the above, I suggest following these two
walkthroughs.
* [Installing MAMP and Wordpress](https://skillcrush.com/2015/04/14/install-wordpress-mac/)
* [Installing Node.js and NPM](http://blog.teamtreehouse.com/install-node-js-npm-mac)

## Installing
Turn on your MAMP server, then follow these steps to install the plugin pack.

### Step 1
[Fork](https://help.github.com/articles/fork-a-repo/) this repo into your local
Wordpress site's plugin directory.
E.g. `wp-content/plugins/my-forked-pluginpack/`

### Step 2
[CD](http://guides.macrumors.com/cd) to the plugin's directory and init the builder
```shell
./bin/pluginpack.sh "My Plugin" "http://localhost:8888/local-wp/"
```
Replace `My Plugin` with the name of your plugin and `http://localhost:8888/local-wp/`
with the URL of your local Wordpress site.

### Step 3
Install the repo's dependencies
```shell
npm install
```
Tip: You can also use `yarn` for all the commands in this repo

### Step 4
From your Wordpress admin screen, 'activate' the plugin

### Step 5
Spin up the developer environment
```shell
npm run dev
```

Your favorite browser will open up `http://localhost:xxxx` and in it should be
a proxied version of your Wordpress install.

You can stop the dev server with <kbd>CTRL</kbd>+<kbd>C</kbd>, then start it up
again with `npm run dev`.

## Building for production

When you're ready to build for production (with minification, hash URLs, etc)
just run the `build` command.
```shell
npm run build
```

## Problems or Issues
Open a [pull request](https://help.github.com/articles/creating-a-pull-request/)
with a fix, or log an issue in the [issues tab](https://github.com/willtpwise/pluginpack/issues).
