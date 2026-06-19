import { test } from '@playwright/test';

test('Test01', async () => {
    // test.slow();
    console.log("Test01");
});

test.fail('Test02', async () => {
    console.log("Test02");
});

test('Test03', async () => {
    console.log("Test03");
});

test('Test04', async () => {
    console.log("Test04");
});

/*
test.beforeAll("beforeAll", async () => {
    // test.setTimeout(50000);
    console.log('beforeAll');
});

test.afterAll("afterAll", async () => {
    console.log('afterAll');
});

test.beforeEach("beforeEach", async () => {
    console.log('beforeEach');
});

test.afterEach("afterEach", async () => {
    console.log('afterEach');
});
*/
