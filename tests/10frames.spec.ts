import { test } from '@playwright/test';

test.skip("Handling Frame", async ({ page }) => {

    await page.goto(`https://ui.vision/demo/webtest/frames/`);
    // await page.pause();

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    const myText3 = frame3?.locator(`//input[@name="mytext3"]`);
    await myText3?.fill('MyText3');

    await page.close();

});


test("Handling Nested Frames", async ({ page }) => {

    await page.goto(`https://ui.vision/demo/webtest/frames/`);
    // await page.pause();

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    const childFrames = frame3?.childFrames();
    console.log(childFrames?.length);
    const radioButtons = childFrames?.at(0)?.locator('.AB7Lab');
    await radioButtons?.first().check();

    const checkBoxes = childFrames?.at(0)?.locator('.uHMk6b');
    await checkBoxes?.first().check();

    await page.close();

});