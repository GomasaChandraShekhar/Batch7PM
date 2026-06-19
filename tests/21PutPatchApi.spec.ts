import { test, expect } from '@playwright/test';


let id: string;

test( 'Put Request', async ( { request } ) => {

    const response = await request.put( 'https://api.restful-api.dev/objects/ff8081819d82fab6019e88ac7af92e25',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Playwright ProMax Updated 26",
                "data": {
                    "year": 2026,
                    "price": 2999.99,
                    "CPU model": "Playwright Core i9",
                    "Hard disk size": "10 TB"
                }
            }
        }
    );

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    id = jsonResponse.id;
    console.log( 'Id is :: ', id );
} );


test( "Get After Put Request", async ( { request } ) => {

    const response = await request.get( `https://api.restful-api.dev/objects/${id}` );

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



test( 'Patch Request', async ( { request } ) => {

    const response = await request.patch( 'https://api.restful-api.dev/objects/ff8081819d82fab6019e88ac7af92e25',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Playwright ProMax 26 (Updated)"
            }
        }
    );

    console.log( response.status() );
    console.log( response.statusText() );

    const jsonResponse = await response.json();

    id = jsonResponse.id;
    console.log( 'Id is :: ', id );
} );


test( "Get After Patch Request", async ( { request } ) => {
    
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
