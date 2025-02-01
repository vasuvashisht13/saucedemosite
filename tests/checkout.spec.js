const { test, expect } = require('@playwright/test');
const { loginWithCredentials } = require('../utils/utils');  // Correct import
const ShoppingCartPage = require('../pages/ShoppingCartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Process', () => {

    test('Checkout flow', async ({ page }) => {
        // Step 1: Login
        await loginWithCredentials(page, 'standard_user', 'secret_sauce');

        // Step 2: Go to Shopping Cart and proceed to checkout
        const cartPage = new ShoppingCartPage(page);
        await cartPage.addBagpackToCart();
        await cartPage.remove_btn_visible();

        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.clickonshopicon();
        await checkoutPage.click_on_cart();
        await checkoutPage.fill_in_form('John', 'Doe', '12345');
        await checkoutPage.clik_on_continue();
        await checkoutPage.verify_checkout();
        await checkoutPage.click_on_finish();

        // Verify the checkout complete message
        await checkoutPage.checkout_complete_message();
    });

});


