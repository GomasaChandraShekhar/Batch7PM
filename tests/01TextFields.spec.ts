import { test, expect } from '@playwright/test';


test("Handling Text Field 001", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded"); // 30 sec
    // await page.pause();

    const nameField = page.getByPlaceholder("Enter Name");

    await nameField.fill("Chandra");
    // await nameField.pressSequentially("Chandra");
    const nameData = await nameField.inputValue();
    console.log(`Name field data Before clear :: ${nameData}`);
    // console.log('Name field data is :: ', nameData);
    await nameField.clear();
    console.log(`Name field data After clear :: ${await nameField.inputValue()}`);

    await page.getByPlaceholder("Enter Phone").fill("9100774577");
});


test("Handling Text Fields 002", async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.waitForLoadState("domcontentloaded"); // 30 sec
    // await page.pause();
    await page.getByRole('link', { name: 'Books' }).nth(1).click();

});





