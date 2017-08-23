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
Follow these steps to install the plugin pack.

### Step 1
Drop a copy of this repo into your local Wordpress site's plugin directory.
E.g. `wp-content/plugins/my-plugin/`

### Step 2
[CD](http://guides.macrumors.com/cd) to the plugin's directory and init the builder
```shell
$ ./bin/pluginpack.sh <name> <MAMP>
```
Replace <name> with the name of your plugin and use quotes to enclose

Replace <MAMP> with your MAMP site URL and make sure to include the whole URL (E.g.
  http://localhost:8888/local-wp/)
```shell
# E.g.
$ ./bin/pluginpack.sh "My Plugin" http://localhost:8888/local-wp/
```

### Step 3
Install the repo's dependencies
```shell
$ npm install
```
Tip: You can also use `yarn` for all the commands in this repo

### Step 4
From your Wordpress admin screen, 'activate' the plugin

### Step 5
Spin up the developer environment
```shell
$ npm run dev
```

### Step 6
Your favorite browser should open up `http://localhost:xxxx` and in it should be
a proxied version of your Wordpress install. Login to your site, then activate
the plugin through the `Dashboard/Plugins` screen.

### Step 7
If your Wordpress admin screen sends you a successful install message then you're
good to go. Head over to `plugin-pack/index.php` and start developing.

When you're ready to build for production (with minification, hash URLs, etc)
just stop the `dev` command with `ctrl + c` then run the `build` command.
```shell
$ npm run build
```

## Problems or Issues
Open a pull request with a fix, or log an issue in the issues tab.
