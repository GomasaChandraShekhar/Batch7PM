import { test, expect } from '@playwright/test';

test( 'Get Objects', async ( { request } ) => {

    const response = await request.get( 'https://api.restful-api.dev/objects' );

    const statusCode = response.status();
    console.log( 'Status code is :: ', statusCode );
    expect.soft( statusCode ).toBe( 200 );

    const statusMsg = response.statusText();
    console.log( 'Status message is :: ', statusMsg );
    expect.soft( statusMsg ).toBe( 'OK' );

    const jsonResponse = await response.json();
    // console.log( jsonResponse );

    const id = jsonResponse[ 0 ].id;
    console.log( 'Object id is :: ', id );
    expect.soft( id ).toBe( '1' );

    const name = jsonResponse[ 0 ].name;
    console.log( 'Object name is :: ', name );
    expect.soft( name ).toBe( 'Google Pixel 6 Pro' );

    const color = jsonResponse[ 0 ].data.color;
    console.log( 'Object color is :: ', color );
    expect.soft( color ).toBe( 'Cloudy White' );

    const capacity = jsonResponse[ 0 ].data.capacity;
    console.log( 'Object capacity is :: ', capacity );
    expect.soft( capacity ).toBe( '128 GB' );

} );


test( "Get New Resource", async ( { request } ) => {
    
    const response = await request.get( `https://api.restful-api.dev/objects/7`);

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    const id = jsonResponse.id;
    console.log( 'Id is :: ', id );

    const name = jsonResponse.name;
    console.log( 'Name is :: ', name );

    const year = jsonResponse.data.year;
    console.log( 'year is :: ', year );

    const price = jsonResponse.data.price;
    console.log( 'price is :: ', price );

    const cpuModel = 'CPU model';
    const cpuModeldata = jsonResponse.data[ cpuModel ];
    console.log( 'cpuModeldata is :: ', cpuModeldata );

    const hardDiskSize = 'Hard disk size';
    const hardDiskSizeData = jsonResponse.data[ hardDiskSize ];
    console.log( 'hardDiskSizeData is :: ', hardDiskSizeData );

} );