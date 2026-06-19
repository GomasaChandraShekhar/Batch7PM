import { test } from '@playwright/test';

test.describe('Group A', { tag: '@Smoke' }, async () => {
    test('Test01', async () => {
        console.log("Test01");
    });

    test('Test02', async () => {
        console.log("Test02");
    });

});

test.describe('Group B', { tag: '@Stage' }, async () => {

    test('Test03', async () => {
        console.log("Test03");
    });

    test('Test04', async () => {
        console.log("Test04");
    });
});

test.describe('Group C', { tag: ['@Smoke', '@Regression'] }, async () => {
    test('Test05', async () => {
        console.log("Test05");
    });

    test('Test06', async () => {
        console.log("Test06");
    });

});



