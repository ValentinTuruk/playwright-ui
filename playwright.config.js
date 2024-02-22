import { defineConfig, devices } from '@playwright/test';
import { join } from 'path';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: join(process.cwd(), './tests/e2e'),
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://ramonki.by/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.
    browserName: 'chromium',

    // Channel to use, for example "chrome", "chrome-beta", "msedge", "msedge-beta".
    channel: 'chrome',

    // Context geolocation.
    geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // Emulates the user locale.
    locale: 'en-GB',

    // Grants specified permissions to the browser context.
    permissions: ['geolocation'],

    // Emulates the user timezone.
    timezoneId: 'Europe/Paris',

    // Viewport used for all pages in the context.
    viewport: { width: 1920, height: 1080 },

    // Run browser in headless mode.
    headless: true,
  },
});

