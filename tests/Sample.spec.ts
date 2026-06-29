import { expect, test } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    await page.fill('input#Email', 'test@example.com');
    await page.fill('input#Password', 'password');
    await page.click('input[type="submit"]');
});




