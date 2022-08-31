// javascript
const wdio = require("webdriverio");

// javascript
const opts = {
    path: '10.86.163.18/wd/hub',
    port: 80,
    capabilities: {
        platformName: "ANDROID",
        platformVersion: "9",
        noReset: true,
        deviceName: "988a9b394341464b5930",
        'vf:accessKey': "amdocsikaya:Voda20152015",
        appPackage: "com.sec.android.app.popupcalculator",
        appActivity: "com.sec.android.app.popupcalculator.Calculator",
        automationName: "uiautomator2"
    }
};

async function main() {
    const client = await wdio.remote(opts);

    await client.deleteSession();
}

main();