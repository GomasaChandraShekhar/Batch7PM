import { type Page, type Locator } from '@playwright/test';


export class PageObjects {

    readonly page: Page;
    readonly registerLink: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly mobileNumberField: Locator;
    readonly occupation: Locator;
    readonly maleRadioButton: Locator;
    readonly femaleRadioButton: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly ageChechBox: Locator;
    readonly registerButton: Locator;
    readonly successMessageBox: Locator;
    readonly successMessage: Locator;
    readonly userName: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;
    readonly signOutButton: Locator;
    readonly products: Locator;
    readonly prodCards: Locator;
    readonly myCartButton: Locator;
    readonly cartButton: Locator;
    readonly ordersButton: Locator;
    readonly chechoutButton: Locator;
    readonly selectCountrydrp: Locator;
    readonly countryOption: Locator;
    readonly placeOrderButton: Locator;
    readonly orderIdText: Locator;
    readonly orderPlacedMessage: Locator;
    readonly orderIdInOrderDetails: Locator;
    readonly viewOrdersButton: Locator;
    readonly ordersHistoryLink: Locator;
    readonly ordersTable: Locator;
    readonly rows: Locator;
    readonly orderIdCol: Locator;
    readonly viewOrderButon: Locator;
    readonly ordersLink: Locator;

    constructor ( page: Page ) {

        this.page = page;
        this.registerLink = this.page.getByRole( 'link', { name: 'Register' } );
        this.firstNameField = this.page.getByRole( 'textbox', { name: 'First Name' } );
        this.lastNameField = this.page.getByRole( 'textbox', { name: 'Last Name' } );
        this.emailField = this.page.locator( '#userEmail' );
        this.mobileNumberField = this.page.locator( '#userMobile' );
        this.occupation = this.page.getByRole( 'combobox' );
        this.maleRadioButton = this.page.getByRole( 'radio', { name: 'Male', exact: true } );
        this.femaleRadioButton = this.page.getByRole( 'radio', { name: 'Female', exact: true } );
        this.passwordField = this.page.getByRole( 'textbox', { name: 'Passsword' } );
        this.confirmPasswordField = this.page.getByRole( 'textbox', { name: 'Confirm Password' } )
        this.ageChechBox = this.page.getByRole( 'checkbox' );
        this.registerButton = this.page.getByRole( 'button', { name: 'Register' } );
        this.successMessageBox = this.page.getByRole( 'heading', { name: 'Account Created Successfully' } );
        this.successMessage = this.page.locator( 'app-register' );
        this.userName = this.page.locator( '#userEmail' );
        this.userPassword = this.page.locator( '#userPassword' );
        this.loginButton = this.page.locator( '#login' );
        this.signOutButton = this.page.getByRole( 'button', { name: 'Sign Out', exact: true } );
        this.products = this.page.locator( 'div.card-body' );
        this.prodCards = this.page.locator( 'div.card-body' );
        this.myCartButton = this.page.locator( `button[routerlink*='cart']` );
        this.cartButton = this.page.getByRole( 'button', { name: ' Cart' } );
        this.ordersButton = this.page.getByRole( 'button', { name: ' ORDERS' } );
        this.chechoutButton = this.page.getByRole( 'button', { name: 'Checkout❯' } );
        this.selectCountrydrp = this.page.getByRole( 'textbox', { name: 'Select Country' } );
        this.countryOption = this.page.locator( 'button.list-group-item' );
        this.placeOrderButton = this.page.getByText( 'Place Order' );
        this.orderIdText = this.page.locator( `//label[@class="ng-star-inserted"]` );
        this.orderPlacedMessage = this.page.getByLabel( 'Order Placed Successfully' );
        this.orderIdInOrderDetails = this.page.locator( 'div.col-text.-main' );
        this.viewOrdersButton = this.page.getByText( 'View Orders' );
        this.ordersHistoryLink = this.page.getByText( 'Orders History Page' );
        this.ordersLink = this.page.locator( "button[routerlink*='myorders']" );
        this.ordersTable = this.page.locator( `table.ng-star-inserted` );
        this.rows = this.ordersTable.locator( 'tbody tr' );
        this.orderIdCol = this.rows.first().locator( 'th' );
        this.viewOrderButon = this.page.getByRole( 'button', { name: 'View' } );


    }


}