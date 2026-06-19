import { test } from '@playwright/test'

test.skip("Handling Web Table", async ({ page }) => {

    await page.goto("https://money.rediff.com/gainers/bse/daily/groupall");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const table = page.locator('.dataTable');

    /*
    const tHeadColumns = table.locator('//thead//tr//th');
    console.log(`Header columns count is ${await tHeadColumns.count()}`);

    const eleArr = await tHeadColumns.all();

    for (const element of eleArr) {
        const colName = await element.innerText();
        console.log(`Table Header Column name is :: ${colName}`);
    }
    */

    const rows = table.locator('//tbody//tr');
    const rowsCount = await rows.count();

    for (let row = 1; row <= rowsCount; row++) {
        const columns = table.locator(`//tbody//tr[${row}]`).locator(`//td`);
        const colmsCount = await columns.count();

        for (let col = 1; col <= colmsCount; col++) {
            const cellData = await table.locator(`//tbody//tr[${row}]`).locator(`//td[${col}]`).innerText();
            console.log(`Row ${row} and column ${col} the data is :: ${cellData}`);
        }
    }

    // for (let row = 0; row < rowsCount; row++) { // to iterate over rows
    //     const columns = rows.nth(row).locator('//td');
    //     const colmsCount = await columns.count();

    //     for (let col = 0; col < colmsCount; col++) { // to iterate over columns
    //         const cellData = await columns.nth(col).innerText();
    //         console.log(`Row ${row + 1} and column ${col + 1} the data is :: ${cellData}`);
    //     }
    // }


});


test("Web Table Pagination", async ({ page }) => {

    await page.goto(`https://testautomationpractice.blogspot.com/`);
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    const paginationLink = page.locator('//ul[@id="pagination"]//li//a');
    const table = page.locator('#productTable');
    const rows = table.locator('//tbody//tr');
    const rowsCount = await rows.count();

    for (const link of await paginationLink.all()) {
        await link.click();

        for (const row of await rows.all()) {
            const columns = row.locator('//td');
            const colsCount = await columns.count();
            const prodName = await columns.nth(1).innerText();
            if (prodName == 'Smartphone' || prodName == 'Gaming Console'
                || prodName == 'Soundbar' || prodName == 'Router') {
                await columns.nth(3).locator('//input').check();
            }
        }
    }

});


