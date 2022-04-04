// Playwright Docs - https://playwright.dev/docs/intro

const { test, expect } = require('@playwright/test');

test.describe('Playwright First Test Suite', () => {
  test('Flybuys Homepage', async ({ page }) => {
    await page.goto('/');    
    // could be used with ElementHandle
    const title = page.locator('.col-8 > .text-center');
    await expect(title).toBeVisible({timeout: 12000});
    await expect(title).toHaveText('Happiness is the freedom to choose.');
  });

  test('Flybuys Earn Page', async ({ page }) => {
    await page.goto('/earn');
    // or could be used with Promise<ElementHandle>
    await expect(page.locator('.roomy')).toHaveText('Earn Flybuys', { timeout: 9000 });
  });

  test.only('Flybuys Extras Page', async ({ page }) => {
    await page.goto('/extras');
    const title = page.locator('.landing_page_header section--px');
    await expect(title).toHaveText('Flybuys Extras', { timeout: 8000 });
  });

});

