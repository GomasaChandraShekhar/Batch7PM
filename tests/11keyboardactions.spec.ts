import { test } from '@playwright/test';

test("Key Board Actions", async ({ page, context }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.pause();

    const unserNameField = page.locator('#name');
    const emailField = page.locator('#email');
    const PPLink = page.getByRole('link', { name: 'PlaywrightPractice' });

    await unserNameField.fill('Playwright');
    await unserNameField.press('Control+a');
    await unserNameField.press('Control+c');
    await emailField.press('Control+v');

    await PPLink.hover();
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            PPLink.press('Control+Enter')
        ]
    );
    await page.waitForTimeout(3000);
    const pages = context.pages();
    console.log(pages.length); // 2

    await page.close();

});




