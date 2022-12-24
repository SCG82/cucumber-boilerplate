import type { Capabilities } from '@wdio/types';

const BROWSERSTACK_OPTIONS_DEFAULTS: Capabilities.BrowserStackCapabilities = {
    projectName: 'project name',
    buildName: 'BUILD NAME',
    consoleLogs: 'verbose',
    networkLogs: false,
    seleniumVersion: '4.4.0',
    buildTag: new Date().toISOString(),
};

const capabilities: Capabilities.DesiredCapabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
        args: [
            '--ignore-certificate-errors',
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
            '--disable-renderer-backgrounding',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
        ],
        perfLoggingPrefs: {
            enableNetwork: false,
            enablePage: false,
        },
    },
    'bstack:options': {
        ...BROWSERSTACK_OPTIONS_DEFAULTS,
        os: 'OS X',
        osVersion: 'Monterey',
        sessionName: 'MacOS - Latest Chrome',
        resolution: '1920x1080',
        idleTimeout: 300,
        local: false,
        debug: false,
    },
};

export default capabilities;
