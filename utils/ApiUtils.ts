import { expect, APIRequestContext } from '@playwright/test';


export default class ApiUtils {

    readonly apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async postRequest(url: string, payload: any): Promise<any> {

        const response = await this.apiContext.post(url,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );

        console.log(response.status());
        expect.soft(response.status()).toBe(200);
        console.log(response.statusText());
        expect.soft(response.statusText()).toBe('OK');

        return await response.json();

    }

    async getAllResources(url: string) {
        const response = await this.apiContext.get(url);
        return await response.json();

    }

    async getOneResource(url: string, id: string) {
        const response = await this.apiContext.get(url + '/' + id);
        return await response.json();

    }

    async putRequest(url: string, id: string, payload: any): Promise<any> {

        const response = await this.apiContext.put(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );

        console.log(response.status());
        expect.soft(response.status()).toBe(200);
        console.log(response.statusText());
        expect.soft(response.statusText()).toBe('OK');

        return await response.json();

    }

    async patchRequest(url: string, id: string, payload: any): Promise<any> {

        const response = await this.apiContext.patch(url + '/' + id,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                data: payload
            }
        );

        console.log(response.status());
        expect.soft(response.status()).toBe(200);
        console.log(response.statusText());
        expect.soft(response.statusText()).toBe('OK');
        return await response.json();
    }

    async deleteRequest(url: string, id: string): Promise<any> {
        const response = await this.apiContext.delete(url + '/' + id);
        console.log(response.status());
        expect.soft(response.status()).toBe(200);
        console.log(response.statusText());
        expect.soft(response.statusText()).toBe('OK');
        return await response.json();
    }

}
