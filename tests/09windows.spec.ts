import { test, expect } from '@playwright/test';

test.skip("Handling New Tab", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    // await page.pause();

    await page.getByRole(`link`, { name: 'Open New Tabbed Windows ' }).click();

    const [childPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole(`button`, { name: 'click' }).click()
        ]
    );

    await childPage.bringToFront(); // Activate the specific page 
    console.log(await childPage.title());
    await childPage.waitForTimeout(2000);
    const selHeading = childPage.locator(`//h4[text()='Selenium WebDriver']`);

    await expect.soft(selHeading).toBeVisible();

    if (await childPage.title() == 'Selenium') {
        await childPage.close();
    }

    await page.bringToFront(); // Activate the specific page 
    if (await page.title() == 'Frames & windows') {
        await expect.soft(page.getByRole(`link`, { name: 'Open New Tabbed Windows ' })).toBeVisible();
        await page.close();
    }

});

test.skip("Handling New Saperate Window", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    // await page.pause();

    await page.getByRole(`link`, { name: 'Open New Seperate Windows ' }).click();

    const [childPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole(`button`, { name: 'click' }).click()
        ]
    );

    await childPage.bringToFront(); // Activate the specific page 
    console.log(await childPage.title());
    const selHeading = childPage.locator(`//h4[text()='Selenium WebDriver']`);
    await expect.soft(selHeading).toBeVisible();

    if (await childPage.title() == 'Selenium') {
        await childPage.close();
    }

    await page.bringToFront(); // Activate the specific page 
    if (await page.title() == 'Frames & windows') {
        await expect.soft(page.getByRole(`link`, { name: 'Open New Tabbed Windows ' })).toBeVisible();
        await page.close();
    }

});

test("Handling Saperate Multiple Windows", async ({ page, context }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");
    // await page.pause();

    await page.getByRole(`link`, { name: 'Open Seperate Multiple Windows ' }).click();

    const [childPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole(`button`, { name: 'click' }).click()
        ]
    );
    await page.waitForTimeout(3000);
    const allPages = context.pages();
    console.log(allPages.length); // 3

    console.log(await allPages[0].title());
    console.log(await allPages[1].title());
    console.log(await allPages[2].title());

    await allPages[1].bringToFront(); // Activate the specific page 
    console.log(await allPages[1].title());
    const emailField = allPages[1].locator(`#email`);
    await expect.soft(emailField).toBeVisible();

    if (await allPages[1].title() == 'Index') {
        // await allPages[1].close();
    }

    await allPages[2].bringToFront(); // Activate the specific page 
    console.log(await allPages[2].title());
    const selHeading = allPages[2].locator(`//h4[text()='Selenium WebDriver']`);
    await expect.soft(selHeading).toBeVisible();

    if (await allPages[2].title() == 'Selenium') {
        // await allPages[2].close();
    }

    await page.bringToFront(); // Activate the specific page 
    if (await page.title() == 'Frames & windows') {
        await expect.soft(page.getByRole(`link`, { name: 'Open New Tabbed Windows ' })).toBeVisible();
        // await page.close();
    }

});
