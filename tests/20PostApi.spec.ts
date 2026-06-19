import { test, expect } from '@playwright/test';


let id: string;

test( 'Post Objects', async ( { request } ) => {

    const response = await request.post( 'https://api.restful-api.dev/objects',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Playwright Pro 26",
                "data": {
                    "year": 2026,
                    "price": 1821.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB"
                }
            }
        }
    );

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    id = jsonResponse.id;
    console.log( 'Id is :: ', id );

    const name = jsonResponse.name;
    console.log( 'Name is :: ', name );

    const createdAt = jsonResponse.createdAt;
    console.log( 'createdAt is :: ', createdAt );

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

test( "Get New Resource", async ( { request } ) => {
    
    const response = await request.get( `https://api.restful-api.dev/objects/${id}`);

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    // id = jsonResponse.id;
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


