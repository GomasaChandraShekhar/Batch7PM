import { test, expect } from '@playwright/test';

test("Handling Single Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const countryDropdown = page.getByRole('combobox', { name: 'Country:' });
    await countryDropdown.scrollIntoViewIfNeeded();

    countryDropdown.selectOption({ label: 'India' });
    console.log(await countryDropdown.inputValue());
    countryDropdown.selectOption('Germany');
    console.log(await countryDropdown.inputValue());
    await countryDropdown.selectOption({ index: 4 }); // france
    console.log(await countryDropdown.inputValue());
    await countryDropdown.selectOption({ value: 'brazil' });
    console.log(await countryDropdown.inputValue());

    // to capture all values from dropdown

    const cDdOptions = countryDropdown.getByRole('option');
    console.table(await cDdOptions.allInnerTexts()); // Returns all values from dropdown
    console.table(await cDdOptions.allTextContents()); // Returns all text contents from dropdown

});


test.skip("Handling Multi Selection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const colorsDrp = page.getByRole('listbox', { name: 'Colors:' });
    await colorsDrp.scrollIntoViewIfNeeded();

    await colorsDrp.selectOption('Red');
    console.log(await colorsDrp.inputValue()); // Returns selected value.

    await colorsDrp.selectOption(['Blue', 'Yellow', 'White']);
    console.log(await colorsDrp.inputValue()); //Blue

    const ddOptions = colorsDrp.getByRole('option');
    await expect.soft(ddOptions).toHaveCount(7);
    console.table(await ddOptions.allTextContents());
    console.table(await ddOptions.allInnerTexts());


});

test("Handling Autosuggestions", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    await page.locator('//textarea[@name="q"]').fill('Playwright');

    const autoSuggestions = page.locator(`//li[@data-attrid="AutocompletePrediction"]`);

    for (const link of await autoSuggestions.all()) {
        const innerText = await link.innerText();
        if (innerText == 'playwright automation') {
            await link.click();
            break;
        }
    }

    const results = page.locator('//h3[@class="LC20lb MBeuO DKV0Md"]');
    await results.nth(0).click();
    await expect.soft(page.getByAltText('Playwright logo').first()).toBeVisible();

});