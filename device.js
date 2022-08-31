const wdio = require("webdriverio");
var wd = require('wd');

desiredCaps = {
    'deviceName': '988a9b394341464b5930',
    'platformName': 'ANDROID',
    'version': '9',
    'noReset': true,
    'udid': '988a9b394341464b5930',
    'automationName': 'uiautomator2',
    'vf:accessKey': 'amdocsikaya:Voda20152015',
    'appPackage': 'com.sec.android.app.popupcalculator',
    'appActivity': 'com.sec.android.app.popupcalculator.Calculator'
};

driver = wd.promiseRemote("http://10.86.163.18:80/wd/hub");
driver = wd.desiredCaps;