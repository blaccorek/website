import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 4173
    },
    testDir: 'tests',
    testMatch: /^[\w\-./]*(test|spec)\.[jt]s$/,
    reporter: process.env.CI
        ? [['github'], ['html', { open: 'never' }]]
        : 'list',
    retries: process.env.CI ? 2 : 0,
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure'
    }
};

export default config;
