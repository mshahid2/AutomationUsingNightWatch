var config = require('../../nightwatch.conf.js');
module.exports = {
		afterEach : function(browser, done) {
		  browser.sessionLog(function(result) {
		    console.log(result);
		  }).end(function() {
		    done();
		  });
		},
		'Test Faceb00k' : function (browser) {
		    browser
		      .maximizeWindow() // If on Linux set window size, max 1920x1080, like .resizeWindow(1920, 1080);
		      .url('https://www.facebook.com/')
		      .waitForElementVisible('body', 1000)
		      .setValue('input[type=text]', 'shahid')
		      .setValue('input[name=lastname]', 'MD')
		      .setValue('input[name=reg_email__]','9876543210')
		      .setValue('input[name=reg_passwd__]','testing')
		      .waitForElementVisible('button[name=websubmit]', 1000)
		      .click('button[name=websubmit]')
		      .pause(10000);
		  }
		};