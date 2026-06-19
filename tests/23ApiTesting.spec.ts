import { test, APIRequestContext, expect } from '@playwright/test';
import ApiUtils from '../utils/ApiUtils';

let apiUtils: ApiUtils;
let apiContext: APIRequestContext;
let postPayLoad = {
    "name": "Playwright Pro 26",
    "data": {
        "year": 2026,
        "price": 1821.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "2 TB"
    }
};

let putPayLoad = {
    "name": "Playwright Pro Max 2026(Put - Updated)",
    "data": {
        "year": 2026,
        "price": 1999.99,
        "CPU model": "Intel Core i26",
        "Hard disk size": "26 TB"
    }
};

let patchPayLoad = {
    "name": "Playwright Pro Max 2026( patch - updated)"
};

const url: string = `https://api.restful-api.dev/objects`;

let jsonResponse: any;
const cpuModel = 'CPU model';
const hardDiskSize = 'Hard disk size';

test( 'Post Request', async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    jsonResponse = await apiUtils.postRequest( url, postPayLoad );

    console.log( jsonResponse.id );
    console.log( jsonResponse.name );
    console.log( jsonResponse.data.year );
    console.log( jsonResponse.data.price );
    console.log( jsonResponse.createdAt );
    console.log( jsonResponse.data[ cpuModel ] );
    console.log( jsonResponse.data[ hardDiskSize ] );

} );

test.skip( "Get All Resources", async ( { playwright } ) => {

    apiContext = await playwright.request.newContext();

    apiUtils = new ApiUtils( apiContext );

    jsonResponse = apiUtils.getAllResources( url );


    for ( const obj of jsonResponse ) {

        const id = obj.id;
        console.log( 'Id is :: ', id );

        const name = obj.name;
        console.log( 'Name is :: ', name );

        const year = obj.data.year;
        console.log( 'year is :: ', year );

        const price = obj.data.price;
        console.log( 'price is :: ', price );

        const cpuModel = 'CPU model';
        const cpuModeldata = obj.data[ cpuModel ];
        console.log( 'cpuModeldata is :: ', cpuModeldata );

        const hardDiskSize = 'Hard disk size';
        const hardDiskSizeData = obj.data[ hardDiskSize ];
        console.log( 'hardDiskSizeData is :: ', hardDiskSizeData );

    }
} );

test.skip( "Get One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const oneResource = await apiUtils.getOneResource( url, jsonResponse.id );
    expect.soft( oneResource.id ).toBe( jsonResponse.id );
    expect.soft( oneResource.name ).toBe( postPayLoad.name );
    expect.soft( oneResource.data.year ).toBe( postPayLoad.data.year );
    expect.soft( oneResource.data.price ).toBe( postPayLoad.data.price );
    expect.soft( oneResource.data[ cpuModel ] ).toBe( postPayLoad.data[ cpuModel ] );
    expect.soft( oneResource.data[ hardDiskSize ] ).toBe( postPayLoad.data[ hardDiskSize ] );
} );

test( "Put One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const oneResource = await apiUtils.putRequest( url, jsonResponse.id, putPayLoad );
    expect.soft( oneResource.id ).toBe( jsonResponse.id );
    expect.soft( oneResource.name ).toBe( putPayLoad.name );
    expect.soft( oneResource.data.year ).toBe( putPayLoad.data.year );
    expect.soft( oneResource.data.price ).toBe( putPayLoad.data.price );
    expect.soft( oneResource.data[ cpuModel ] ).toBe( putPayLoad.data[ cpuModel ] );
    expect.soft( oneResource.data[ hardDiskSize ] ).
        toBe( putPayLoad.data[ hardDiskSize ] );
} );

test( "Patch One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const oneResource = await apiUtils.patchRequest( url, jsonResponse.id, patchPayLoad );
    expect.soft( oneResource.id ).toBe( jsonResponse.id );
    expect.soft( oneResource.name ).toBe( patchPayLoad.name );

} );

test( "Delete One Resource", async ( { playwright } ) => {
    apiContext = await playwright.request.newContext();
    apiUtils = new ApiUtils( apiContext );
    const oneResource = await apiUtils.deleteRequest( url, jsonResponse.id );
    console.log( oneResource.message );
    expect.soft( oneResource.message ).
        toBe( `Object with id = ${jsonResponse.id} has been deleted.` );
} );



