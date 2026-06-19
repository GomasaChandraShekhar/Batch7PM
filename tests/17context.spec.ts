import { test, chromium } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

test("proxy Setting", async () => {


    const browser = await chromium.launch();
    const context = await browser.newContext({
        // proxy: {
        //     'server': 'https://playwright.dev/',
        //     'username': 'username',
        //     'password': 'password'
        // },
        // viewport: { width: 1550, height: 690 },
        // ignoreHTTPSErrors: true
    });

    context.addCookies(
        [
            {
                name: '_ga',
                value: "GA1.1.1839579744.1778730043",
                domain: "rahulshettyacademy",
                path: '/'
            },
            {
                name: '_ga_NVJT9K1HZ2',
                value: 'GS2.1.s1779805423$o19$g1$t1779805442$j41$l0$h642288039',
                domain: "rahulshettyacademy",
                path: '/'
            },
            {
                name: '_gcl_au',
                value: '1.1.2117362134.1778730042.409421730.1779805443.1779805442',
                domain: "rahulshettyacademy",
                path: '/'
            },
            {
                name: 'practice_email',
                value: 'gomasachandrashekhar@gmail.com',
                domain: "rahulshettyacademy",
                path: '/'
            },
            {
                name: 'practice_name',
                value: 'Chandra Shekhar',
                domain: "rahulshettyacademy",
                path: '/'
            }
        ]
    );

    const page = await context.newPage();
    const pom = new PageObjectManager(page);

    // await page.goto('https://expired.badssl.com/');
    pom.loginPage.goto('https://rahulshettyacademy.com/client/#/auth/login');
    pom.loginPage.login('gomasachandrashekhar@gmail.com', 'Gomasa@1988');

    await page.pause();

});