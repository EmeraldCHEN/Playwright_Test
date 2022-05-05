# Playwright_Test

Command line

- Run all the tests: `npx playwright test`

- Run tests in headed browsers: `npx playwright test --headed`

- Disable parallelization: `npx playwright test --workers=1` (Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, test files are run in parallel. Tests in a single file are run in order, in the same worker process. See https://playwright.dev/docs/test-parallel)

- Run in debug mode with Playwright Inspector: `npx playwright test --debug`

Reference: https://playwright.dev/docs/intro
