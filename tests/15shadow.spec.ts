import { test } from '@playwright/test';

test.skip("Handling Shadow Element", async ({ page }) => {

    // await page.goto("https://testautomationpractice.blogspot.com/");
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const shadowDom = page.locator('div#userName');

    // const userNameField = page.locator('input[type="text"]');
    // const userNameField = page.locator('div#userName').locator('#kils');
    // const userNameField = shadowDom.locator('#kils');
    const userNameField = shadowDom.getByRole('textbox', { name: 'user name field', exact: true });

    await userNameField.fill('Playwright');

    await page.close();

});

test("Handling iframes inside Shadow Dom", async ({ page }) => {

    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
    await page.waitForTimeout(3000);
    await page.pause();

    const shadowDom = page.locator('div#userName');

    // const userNameField = page.locator('input[type="text"]');
    // const userNameField = page.locator('div#userName').locator('#kils');
    // const userNameField = shadowDom.locator('#kils');
    const userNameField = shadowDom.getByRole('textbox', { name: 'user name field', exact: true });
    await userNameField.scrollIntoViewIfNeeded();
    await userNameField.fill('Playwright');

    const frame1 = shadowDom.frameLocator('#pact1');
    const currentCrushNameField = frame1.getByRole('textbox', { name: 'Current Crush Name', exact: true });
    await currentCrushNameField.fill('Playwright');

    const frame2 = frame1.frameLocator('#pact3');
    const destinyField = frame2.getByRole('textbox', { name: 'Destiny', exact: true });
    await destinyField.fill('Typescript');

    await page.close();
} );




