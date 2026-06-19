import { expect, test } from '@playwright/test';

test.skip("Handling Simple Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    // SImple alert
    page.on('dialog', async dialog => {

        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });

    await page.getByText('Click for JS Alert').click();

    await page.close();

});

test.skip("Handling Confirmation Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    // SImple alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        // await dialog.accept();
        await dialog.dismiss();
    });

    await page.getByText('Click for JS Confirm').click();
    console.log(await page.locator('#result').innerText());


    await page.close();

});

test("Handling Prompt Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    // SImple alert
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        // await dialog.accept();
        await dialog.accept('Pratik');
        // await dialog.dismiss();
    });

    await page.getByText('Click for JS Prompt').click();
    console.log(await page.locator('#result').innerText());


    await page.close();

});


