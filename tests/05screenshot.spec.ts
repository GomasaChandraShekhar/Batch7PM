import { test, expect } from '@playwright/test';


test("Screenshot Test1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.getByText('Automation Testing Practice');
    // await page.pause();

    await sourceEle.screenshot({ path: './screenshots/screenshot.png' });

    await page.screenshot({ path: './screenshots/expectedPageImage.png', fullPage: true });

    // await page.screenshot({ path: './screenshots/expectedPageImage.png' });

    expect(await page.screenshot({ path: './screenshots/actualPageImage.png', fullPage: true })).toMatchSnapshot({ path: './screenshots/expectedPageImage.png' });

    await page.close();
});

test("Screenshot Test2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.getByText('Automation Testing Practice');
    // await page.pause();

    await sourceEle.screenshot({ path: './screenshots/screenshot.png' });

    await page.screenshot({ path: './screenshots/expectedPageImage1.png', fullPage: true });

    // await page.screenshot({ path: './screenshots/expectedPageImage3.png' });

    expect(await page.screenshot({ path: './screenshots/actualPageImage1.png', fullPage: true })).toMatchSnapshot({ path: './screenshots/expectedPageImage2.png' });

    await page.close();
});





