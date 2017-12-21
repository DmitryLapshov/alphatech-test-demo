# Alphatech Site Test Demo
An example of client side tests

## Prerequisites
You will need the following things properly installed on your computer.
* [Node.js](http://nodejs.org/) - with [npm](https://www.npmjs.com/)
* [Mocha](http://mochajs.org/)
* [Selenium](http://www.seleniumhq.org/) - we need only selenium-webdriver when running without [Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2)
* [Mozilla GeckoDriver](https://github.com/mozilla/geckodriver/releases/) - this needs to be installed in order to use FireFox 47+
* [Firefox](https://www.mozilla.org/) - with [Xvfb](http://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml) server it can be run on machines with no display hardware and no physical input devices

## Installation
### Windows
* `npm install mocha`
* `npm install selenium-webdriver --msvs_version=2012` - this depends on the actual MS Visual Studio version

### Linux
* `npm install mocha`
* `npm install selenium-webdriver`

### Mac
* see Linux

## Running Tests
* `npm test`

## Further Reading / Useful Links
* [Selenium Client & WebDriver JavaScript(Node) Bindings](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
