// Playwright Docs - https://playwright.dev/docs/intro

const { test, expect } = require('@playwright/test');

test.describe('Playwright First Test Suite', () => {

  test('Flybuys Homepage', async ({ page }) => {
    await page.goto('/');    
    await expect(page).toContainUrl('flybuys.co.nz');
    // could be used with ElementHandle
    const title = page.locator('.col-8 > .text-center');
    await expect(title).toBeVisible({timeout: 12000});
    await expect(title).toHaveText('Happiness is the freedom to choose.');
    await page.click('.primary-nav__list > [data-testid="primary-nav-store"] > a');
    await expect(page).toContainUrl('store.flybuys.co.nz'); 
    const wishlistIcon = page.locator('.fal .fa-heart');
    await expect(wishlistIcon).toBeVisible; 
  });

  test('Flybuys Earn Page', async ({ page }) => {
    await page.goto('/earn');
    // or could be used with Promise<ElementHandle>
    await expect(page.locator('.roomy')).toHaveText('Earn Flybuys', { timeout: 9000 });
  });

  test('Flybuys Extras Page', async ({ page }) => {
    await page.goto('/extras');
    const title = page.locator('h1');
    await expect(title).toHaveText('Flybuys Extras', { timeout: 8000 });
  });

  test('Flybuys Store', async ({ page }) => {
    await page.goto('/extras');
    const title = page.locator('h1');
    await expect(title).toHaveText('Flybuys Extras', { timeout: 8000 });
  });

});

