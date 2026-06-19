import { test, expect } from '@playwright/test';

test("Handling date picker", async ({ page }) => {

    let date = '3';
    let month = 'June';
    let year = '2026';

    // await page.goto("https://jqueryui.com/datepicker/");
    await page.goto('https://jqueryui.com/datepicker/#other-months');
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const frame = page.frameLocator('.demo-frame');
    const dateField = frame.locator('#datepicker');
    const prevButton = frame.locator('//a[@title="Prev"]');
    const nextButton = frame.getByText('Next');
    const monthText = frame.locator('//span[@class="ui-datepicker-month"]');
    const yearText = frame.locator('//span[@class="ui-datepicker-year"]');
    const dateValue = frame.locator(`//a[@class='ui-state-default' and text()='${date}']`);

    // await dateField.fill('05/15/2026');

    await dateField.click();
    await expect(nextButton).toBeVisible();

    let flag: boolean = true;
    while (flag) {
        if (await monthText.innerText() != `${month}`) {
            await nextButton.click();
        }
        if (await monthText.innerText() == `${month}` && await yearText.innerText() == `${year}`) {
            await dateValue.click();
            flag = false;
        }
    }

    await page.close();

});



