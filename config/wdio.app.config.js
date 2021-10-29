/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments
 * to run our tests.
 */

const host = '0.0.0.0';   // default appium host
const port = 4723;          // default appium port

const waitforTimeout = 10000000;
const commandTimeout = 6000;

exports.config = {
    debug: false,
    specs: [
        './features/mobile/*.feature'
    ],

    reporters: ['allure','spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    host: host,
    port: port,
    path: '/wd/hub',

    maxInstances: 1,

    sync: true,

    capabilities: [
        {
            browserName: '',                        // browser name is empty for native apps
            platformName: 'Android',
            app: './app/rindustest.apk',
            appPackage: 'es.jaimesuarez.rindustest',  // Package name of your app
            appActivity: 'es.jaimesuarez.rindustest.common.activity.MainActivity', // App activity of the app
            platformVersion: '10.0.0',
            deviceName: 'Nexus 6',
            automationName: 'UiAutomator2',
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'debug', // debug || silent
    coloredLogs: true,
    framework: 'cucumber',          // cucumber framework specified
    

    /**
     * hooks help us execute the repeatitive and common utilities
     * of the project.
     */
    onPrepare: function () {
        console.log('<<< NATIVE APP TESTS STARTED >>>');
    },

    afterCommand: function (scenario) {
        browser.takeScreenshot();
    },

    afterScenario: function () {
        browser.reloadSession()
    },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    },

    before: function(capabilities,spaces){
        browser.addCommand('scrollIntoView', function scrollIntoView(selector) {
        browser.execute(function (elSelector) {
            document.querySelector(elSelector).scrollIntoView()
        }, selector)
        })

    },    


        // If you are using Cucumber you need to specify the location of your step definitions.
        cucumberOpts: {
            // <string[]> (file/dir) require files before executing features
            require: ['./stepDefinitions/mobile/*.ts'],
            // <boolean> show full backtrace for errors
            backtrace: false,
            // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
            requireModule: [],
            // <boolean> invoke formatters without executing steps
            dryRun: false,
            // <boolean> abort the run on first failure
            failFast: false,
            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
            format: ['pretty'],
            // <boolean> hide step definition snippets for pending steps
            snippets: true,
            // <boolean> hide source uris
            source: true,
            // <string[]> (name) specify the profile to use
            profile: [],
            // <boolean> fail if there are any undefined or pending steps
            strict: false,
            // <string> (expression) only execute the features or scenarios with tags matching the expression
            tagExpression: '',
            // <number> timeout for step definitions
            timeout: waitforTimeout,
            // <boolean> Enable this config to treat undefined definitions as warnings.
            ignoreUndefinedDefinitions: false
        },
};
