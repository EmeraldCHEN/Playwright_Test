const { test, expect } = require('@playwright/test');

test.describe('Smoke Test', () => {

  test('Homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://www.xxxxxx.co.nz/');
    // could be used with ElementHandle
    const title = page.locator('.col-8 > .text-center');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Some text here');

    await page.click('.primary-nav__list > [data-testid="primary-nav-store"]'); 
    await expect(page).toHaveURL('https://store.xxxxxx.co.nz/');    
    const wishlistIcon = page.locator('.wishlink-wrapper > .action');
    await expect(wishlistIcon).toBeVisible({timeout: 8000});     
  });

  test('Landing Page 1', async ({ page }) => {
    await page.goto('/landingpage1');
    // or could be used with Promise<ElementHandle>
    await expect(page.locator('.roomy')).toHaveText('Some text here', { timeout: 9000 });
    const title = page.locator('h1');
    await expect(title).toHaveText('Some text here', { timeout: 8000 });
  });
});

