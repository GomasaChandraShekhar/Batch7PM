import { expect, type Page, type Locator } from "@playwright/test";
import { PageObjects } from './PageObjects';

export class PlaceOrderPage extends PageObjects {

    constructor(page: Page) {
        super(page);
    }

    async addProdToCart(prodName: string) {
        await expect.soft(this.prodCards.first()).toBeVisible();
        /*const products = this.prodCards;
        const productsCount = await products.count();
        for (let i = 0; i < productsCount; i++) {
            if (await products.nth(i).locator("//b").innerText() == prodName) {
                await products.nth(i).locator("//button[text()=' Add To Cart']").click();
                break;
            }
        }*/

        for (const prod of await this.prodCards.all()) {
            // console.log(`Product Name :: ${await prod.locator("//b").innerText()}`);
            if (await prod.locator("//b").innerText() == prodName) {
                await prod.locator("//button[text()=' Add To Cart']").click();
                break;
            }
        }
    }

    async navigateToCart() {
        await this.myCartButton.click();
        await expect.soft(this.chechoutButton).toBeVisible();
    }

    async placeOrder(country: string) {
        await this.chechoutButton.click();
        await this.selectCountrydrp.pressSequentially(country);
        await expect.soft(this.page.getByText(country).last()).toBeVisible();
        await this.page.getByText(country).last().click();
        await this.placeOrderButton.click();
    }


    async getOrderId(): Promise<string> {
        await expect.soft(this.orderIdText).toBeVisible();
        let orderId = await this.orderIdText.innerText();
        orderId = orderId.replaceAll('|', '').trim();
        console.log(`OrderId is :: ${orderId}`);
        return orderId;
    }

    async clickOrderHistoryLink() {
        await this.ordersHistoryLink.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async verifyOrder(orderId: string) {
        await expect.soft(this.orderIdCol).toContainText(orderId);
        if (await this.orderIdCol.innerText() == orderId) {
            await this.viewOrderButon.first().click();
        }
        await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
    }

    async clickViewOrdersButton() {
        await this.viewOrdersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }


}

