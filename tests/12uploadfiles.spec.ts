import { test, expect } from '@playwright/test';

// test.use({ viewport: { width: 1600, height: 720 } });

test("Upload Single file", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.pause();

    const singleFileSelection = page.locator('#singleFileInput');
    const singleFileStatus = page.locator('#singleFileStatus');

    await singleFileSelection.scrollIntoViewIfNeeded();
    await singleFileSelection.setInputFiles('./RunningNotes.txt');
    await page.getByText('Upload Single File').click();
    console.log(await singleFileStatus.innerText());
    await expect.soft(singleFileStatus).toContainText('Single file selected: RunningNotes.txt');

    await page.close();

});

test("Upload Multiple files", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.pause();

    const multipleFileSelection = page.locator('#multipleFilesInput');
    const multipleFilesStatus = page.locator('#multipleFilesStatus');

    await multipleFileSelection.scrollIntoViewIfNeeded();

    await multipleFileSelection.setInputFiles(['./RunningNotes.txt', 'C:/Users/GOMASA/Downloads/data.xlsx']);
    await page.getByText('Upload Multiple Files').click();

    console.log(await multipleFilesStatus.innerText());
    await expect.soft(multipleFilesStatus).toContainText('RunningNotes.txt');
    await expect.soft(multipleFilesStatus).toContainText('data.xlsx');

    await page.close();



});

test("Remove Uploaded files", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.pause();

    const multipleFileSelection = page.locator('#multipleFilesInput');
    const multipleFilesStatus = page.locator('#multipleFilesStatus');

    await multipleFileSelection.scrollIntoViewIfNeeded();

    await multipleFileSelection.setInputFiles(['./RunningNotes.txt', 'C:/Users/GOMASA/Downloads/data.xlsx']);
    await page.getByText('Upload Multiple Files').click();

    console.log('file uploaded Text :: ', await multipleFilesStatus.innerText());
    await expect.soft(multipleFilesStatus).toContainText('RunningNotes.txt');
    await expect.soft(multipleFilesStatus).toContainText('data.xlsx');

    await multipleFileSelection.setInputFiles([]);
    await page.getByText('Upload Multiple Files').click();

    console.log('file uploaded Text :: ', await multipleFilesStatus.innerText());
    await expect.soft(multipleFilesStatus).toContainText('No files selected.');

    await page.close();

});

