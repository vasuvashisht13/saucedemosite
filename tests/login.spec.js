// const { test, expect } = require('@playwright/test');
// const LoginPage = require('../pages/LoginPage');

// test.describe('SauceDemo Login Tests', () => {

//     test('Login with valid credentials', async ({ page }) => {
//         const lp = new LoginPage(page);
//         await lp.navigate();
//         await lp.login('standard_user', 'secret_sauce');
//         await expect(lp.page.locator(lp.pageTitle)).toBeVisible();
//     });

//     test('Login with invalid credentials', async ({ page }) => {
//         const lp = new LoginPage(page);
//         await lp.navigate();
//         await lp.login('invalid_user', 'wrong_password');

//         // Assertion to verify the error message
//         await expect(lp.page.locator(lp.errorMessage)).toBeVisible();
//         await expect(await lp.getErrorMessage()).toContain(
//             'Epic sadface: Username and password do not match any user in this service'
//         );
//     });

// });




const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('SauceDemo Login Tests', () => {

    test('Login with valid credentials', async ({ page }) => {
        const lp = new LoginPage(page);
        await lp.navigate();
        await lp.login('standard_user', 'secret_sauce');
        
        // Assert that the page title is visible, meaning login is successful
        await expect(await lp.page.locator(lp.pageTitle)).toBeVisible();
    });

    test('Login with invalid credentials', async ({ page }) => {
        const lp = new LoginPage(page);
        await lp.navigate();
        await lp.login('invalid_user', 'wrong_password');
        
        // Assert the error message is visible
        const errorMessage = await lp.getErrorMessage();
        await expect(errorMessage).toContain(
            'Epic sadface: Username and password do not match any user in this service'
        );
    });

});
