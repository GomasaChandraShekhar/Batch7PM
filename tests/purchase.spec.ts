import { test } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';
import { ReadFiles } from '../utils/ReadFiles';


let orderId: string;
let poManager: PageObjectManager;

const readFiles = new ReadFiles();
const filePath = './testdata/PlaceOrder.json';
const placeOrderData: any = readFiles.readJsonfile(filePath);
// const placeOrderData: any = readFiles.readExcelFile(filePath);

for (const { prodName, country } of placeOrderData) {
    // test.describe.configure({ mode: 'parallel' });

    test.describe(`Verify Place Order`, { tag: ['@Smoke', '@Regression'] }, () => {
        // test.describe.configure({ mode: 'parallel' });
        test.beforeEach("Verify Place Order Functionality", async ({ page }) => {
            poManager = new PageObjectManager(page);
            await poManager.loginPage.goto(poManager.testData.url);
            await poManager.loginPage.login(poManager.testData.email, poManager.testData.password);
        });

        test(`Verify Place Order for ${prodName} through Order History Link`, async () => {
            // await poManager.loginPage.login(poManager.testData.email, poManager.testData.password);
            await poManager.placeOrderPage.addProdToCart(prodName);
            await poManager.placeOrderPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.clickOrderHistoryLink();
            await poManager.placeOrderPage.verifyOrder(orderId);
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        test(`Verify Place Order for ${prodName} through Orders`, async () => {
            // await poManager.loginPage.login(poManager.testData.email, poManager.testData.password);
            await poManager.placeOrderPage.addProdToCart(prodName);
            await poManager.placeOrderPage.navigateToCart();
            await poManager.placeOrderPage.placeOrder(country);
            orderId = await poManager.placeOrderPage.getOrderId();
            await poManager.placeOrderPage.clickOrderHistoryLink();
            await poManager.placeOrderPage.verifyOrder(orderId);
            await poManager.placeOrderPage.clickViewOrdersButton();
        });

        test.afterEach("Verify Place Order Functionality", async () => {
            await poManager.loginPage.signOut();
        });

    });



}

