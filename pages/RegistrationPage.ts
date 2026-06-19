import { type Page, expect } from '@playwright/test';
import { PageObjects } from './PageObjects';

export class RegistrationPage extends PageObjects {

    constructor(page: Page) {
        super(page);
    }

    async goto(url: string) {
        await this.page.goto(url);
        await this.page.waitForTimeout(3000);
        await expect.soft(this.registerLink).toBeVisible();
    }


    async clickRegistrationLink() {
        await this.registerLink.click();
        await expect.soft(this.registerButton).toBeVisible();
    }

    async registration() {

        await this.firstNameField.fill('Chandra');
        await this.lastNameField.fill('Shekhar');
        await this.emailField.fill('abcd12qwerty@gmail.com');
        await this.mobileNumberField.fill('9000090000');

        await this.occupation.selectOption('3: Engineer');
        await this.maleRadioButton.check();
        await this.passwordField.fill('Gomasa@1988');
        await this.confirmPasswordField.fill('Gomasa@1988');
        await this.ageChechBox.check();
        await this.registerButton.click();

        await expect(this.successMessageBox).toBeVisible();
        await expect(this.successMessage).toContainText('Account Created Successfully');

    };

}

