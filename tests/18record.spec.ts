import { test, expect } from '@playwright/test';

test( 'test', async ( { page } ) => {

    await page.goto("");

    await page.getByRole( 'textbox', { name: 'user name field' } ).click();
    await page.getByRole( 'textbox', { name: 'user name field' } ).fill( 'Playwright' );
    await page.locator( '#pact1' ).contentFrame().getByRole( 'textbox', { name: 'Current Crush Name' } ).click();
    await page.locator( '#pact1' ).contentFrame().getByRole( 'textbox', { name: 'Current Crush Name' } ).fill( 'Typescript' );
    await page.locator( '#pact1' ).contentFrame().locator( '#pact3' ).contentFrame().getByRole( 'textbox', { name: 'Destiny' } ).click();
    await page.locator( '#pact1' ).contentFrame().locator( '#pact3' ).contentFrame().getByRole( 'textbox', { name: 'Destiny' } ).fill( 'Training' );
    await expect( page.locator( '#pact1' ).contentFrame().getByRole( 'textbox', { name: 'Current Crush Name' } ) ).toBeVisible();
    await expect( page.locator( '#userName' ) ).toContainText( 'UserName' );
    await expect( page.locator( '#pact1' ).contentFrame().getByRole( 'textbox', { name: 'Current Crush Name' } ) ).toHaveValue( 'Typescript' );
    await expect( page.locator( '#pact1' ).contentFrame().getByRole( 'textbox', { name: 'Current Crush Name' } ) ).toHaveValue( 'Typescript' );
    await expect( page.getByRole( 'textbox', { name: 'user name field' } ) ).toHaveValue( 'Playwright' );
    await expect( page.getByRole( 'textbox', { name: 'user name field' } ) ).toHaveValue( 'Playwright' );
    await expect( page.locator( '#pact1' ).contentFrame().locator( '#connect' ) ).toMatchAriaSnapshot( `- button "Connect now"` );
    await expect( page.locator( '#pact1' ).contentFrame().locator( '#connect' ) ).toMatchAriaSnapshot( `- button "Connect now"` );
    await expect( page.locator( '#userName' ) ).toMatchAriaSnapshot( `
    - link "Learning Hub":
      - /url: https://www.youtube.com/c/SelectorsHub?sub_confirmation=1
    - heading "UserName" [level=4]
    - textbox "user name field":
      - /placeholder: enter name
      - text: ""
    - img
    - iframe
    - textbox "Enter pizza name"
    `);
    const page1Promise = page.waitForEvent( 'popup' );
    await page.getByRole( 'link', { name: 'Learn XPath & Advance' } ).click();
    const page1 = await page1Promise;

} );

