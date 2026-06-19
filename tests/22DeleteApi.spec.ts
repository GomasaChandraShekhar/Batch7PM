import { test, expect } from '@playwright/test';


test( 'Delete Request', async ( { request } ) => {

    const response = await request.delete( 'https://api.restful-api.dev/objects/ff8081819d82fab6019e88bfc44f2e45' );

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    const message = jsonResponse.message;
    console.log( 'Message is :: ', message );
} );

