const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ShoppingCartPage = require('../pages/ShoppingCartPage');

test.describe('SauceDemo Shopping Cart Tests', () => {

    test('Add Sauce Labs Backpack to cart', async ({ page }) => {
        // Step 1: Log in with valid credentials using lp
        const lp = new LoginPage(page); // Assign login page to 'lp'
        await lp.navigate();
        await lp.login('standard_user', 'secret_sauce'); // Login with valid credentials
        await expect(await lp.page.locator(lp.pageTitle)).toBeVisible(); // Ensure login was successful
        
        // Step 2: Add Sauce Labs Backpack to the cart
        const cartPage = new ShoppingCartPage(page);
        await cartPage.addBagpackToCart();
        
        // Step 3: Verify the remove button (indicating the product is added)
        await cartPage.remove_btn_visible();
    });

});
