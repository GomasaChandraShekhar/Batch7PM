import { test, expect } from '@playwright/test';


test.skip("Drag And Drop Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.locator('div#draggable');
    const targetEle = page.locator('div#droppable');
    // await page.pause();

    // dragTo()
    // await sourceEle.dragTo(targetEle);

    // Mouse
    // await sourceEle.hover();
    // await page.mouse.down();
    // await targetEle.hover();
    // await page.mouse.up();

    await page.close();

});

test("Scroll Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.locator('div#draggable');
    const targetEle = page.locator('div#droppable');
    // await page.pause();

    await sourceEle.scrollIntoViewIfNeeded();

    // await sourceEle.hover();
    // await page.mouse.wheel(0, 1000); // x: 0, y: 2000

    // await sourceEle.click();


});



