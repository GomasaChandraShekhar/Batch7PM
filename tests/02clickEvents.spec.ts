import { test, expect } from '@playwright/test';

test("Click Events", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const heading1 = page.getByText('Automation Testing Practice');
    const blogLink = page.locator(`//a[text()='Blog']`);
    const ppLink = page.locator(`//a[text()='Online Trainings']`);

    // Click on element
    // await blogLink.click();

    // Double click
    // await heading1.dblclick();
    // console.log(await heading1.textContent()); // 
    // console.log(await heading1.innerText()); // 

    // Hover on element
    // await blogLink.hover();

    // Focus - highlight element
    // await blogLink.focus();
    // await heading1.focus();

    // right click
    // await blogLink.click({ button: 'right' });

    // force click
    // await ppLink.click({ force: true });

    // await expect.soft(page.getByRole('heading', { name: 'SDET-QA' })).toBeVisible();

    // Click on element by position
    // await blogLink.click({ position: { x: 10, y: 10 } }); // pixels

    await page.close();

});



