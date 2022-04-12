const { test, expect } = require('@playwright/test');

test.describe('Playwright First Test Suite', () => {

  test('Flybuys Homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('https://www.flybuys.co.nz/');
    // could be used with ElementHandle
    const title = page.locator('.col-8 > .text-center');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('Happiness is the freedom to choose.');

    await page.click('.primary-nav__list > [data-testid="primary-nav-store"]'); 
    await expect(page).toHaveURL('https://store.flybuys.co.nz/');    
    const wishlistIcon = page.locator('.wishlink-wrapper > .action');
    await expect(wishlistIcon).toBeVisible({timeout: 8000});     
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

