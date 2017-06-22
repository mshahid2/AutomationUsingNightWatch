var config = require('../../nightwatch.conf.js');
module.exports = {
	afterEach : function(browser, done) {
		browser.sessionLog(function(result) {
			console.log(result);
		}).end(function() {
			done();
		});
	},
	'Test Google' : function(browser) {
		browser.maximizeWindow().url('http://www.google.com/ncr')
				.waitForElementVisible('body', 1000)
				.setValue('input[type=text]', 'xavient')
				.waitForElementVisible('button[name=btnG]', 1000)
				.click('button[name=btnG]')
				.pause(10000);
	}
};