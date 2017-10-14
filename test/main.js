var 
	webdriver = require('selenium-webdriver'),
	//firefox = require('selenium-webdriver/firefox'),
	By = webdriver.By,
	until = webdriver.until,
	assert = require('assert'),
	test = require('selenium-webdriver/testing');

test.describe('AlphaTech Test Demo', function () {
	'use strict';
	var 
		driver,
		base = 'http://alphatech-inc.com',
		timeout = 30000,
		windowScroll = function () {
			driver.executeScript(function () { return document.body.scrollHeight; }).then(function (height) {
				for(var i = 1; i < height; i += 10) {
					driver.executeScript('window.scrollTo(0, ' + i + ')');
				}
			});
		};

	test.before(function () {
		//var options = new firefox.Options().setBinary('/usr/local/lib/firefox/firefox');
		//driver = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(options).build();
		driver = new webdriver.Builder().forBrowser('chrome').build();
	});

	test.after(function () {
		driver.quit();
	});

	test.describe('Page "About"', function () {
		test.it('Title', function () {
			driver.get(base);
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('AlphaTech – We are a software development company with more than a decade of experience'), timeout);
		});
		test.it('Section "About"', function () {
			driver.findElements(By.xpath('//section[@id = "about"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Section "Expertise"', function () {
			driver.findElements(By.xpath('//section[@id = "expertise"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Section "Reference"', function () {
			driver.findElements(By.xpath('//section[@id = "reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});

	test.describe('Page "Expertise"', function () {
		test.it('Title', function () {
			driver.get(base + '/expertise');
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('Expertise – AlphaTech'), timeout);
		});
		test.it('Expertise', function () {
			driver.findElements(By.xpath('//div[@class = "full-detail"]/h2[. = "Software Development Expertise"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Roadmap reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "Roadmap reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('CloudPatterns reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "CloudPatterns reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});

	test.describe('Page "Portfolio"', function () {
		test.it('Title', function () {
			driver.get(base + '/category/portfolio');
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('Portfolio – AlphaTech'), timeout);
		});
		test.it('I-Plan', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "I-Plan"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Message Router', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "Message Router"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Truck Business', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "TruckBusiness"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});

	test.describe('Page "Partners"', function () {
		test.it('Title', function () {
			driver.get(base + '/category/partners');
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('Partners – AlphaTech'), timeout);
		});
		test.it('Trading Science Ltd', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "Trading Science Ltd"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('TechWire UK', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "TechWire UK"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('CloudPatterns', function () {
			driver.findElements(By.xpath('//div[@class = "post-detail"]//a[. = "CloudPatterns"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});

	test.describe('Page "Employment"', function () {
		test.it('Title', function () {
			driver.get(base + '/employment');
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('Employment – AlphaTech'), timeout);
		});
		test.it('Skills', function () {
			driver.findElements(By.xpath('//div[@class = "full-detail"]/h2[. = "Required Technical Skills"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Roadmap reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "Roadmap reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('CloudPatterns reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "CloudPatterns reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});

	test.describe('Page "Contact Us"', function () {
		test.it('Title', function () {
			driver.get(base + '/contacts');
			driver.sleep(5000);
			windowScroll();
			driver.wait(until.titleIs('Contact Us – AlphaTech'), timeout);
		});
		test.it('Skills', function () {
			driver.findElements(By.xpath('//div[@class = "full-detail"]/p[. = "Please contact us using this form."]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('Roadmap reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "Roadmap reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
		test.it('CloudPatterns reference', function () {
			driver.findElements(By.xpath('//div[@class = "sidebar-wrap"]//h5[. = "CloudPatterns reference"]')).then(function (found) {
				assert(found.length, 'Not found!');
			});
		});
	});
});
