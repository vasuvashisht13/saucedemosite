const { expect } = require("playwright/test");

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.shopIcon = '.shopping_cart_link';
        this.checkout_btn = '#checkout';
        this.firstnameInput = '#first-name';
        this.lastnameInput = '#last-name';
        this.zipcodeInput = '#postal-code';
        this.continue_btn = '#continue';
        this.inventory_item_name = '.inventory_item_name';
        this.finish_btn = '#finish';
        this.complete_msg = '.complete-header';
    }

    async clickonshopicon() {
        await this.page.click(this.shopIcon);
    }

    async click_on_cart() {
        await this.page.click(this.checkout_btn);
    }

    async fill_in_form(firstname, lastname, zipcode) {
        await this.page.fill(this.firstnameInput, firstname);
        await this.page.fill(this.lastnameInput, lastname);  // Fixed: It was 'Vashisht' in the earlier code
        await this.page.fill(this.zipcodeInput, zipcode);
    }

    async clik_on_continue() {
        await this.page.click(this.continue_btn);
    }

    async verify_checkout() {
        await expect(this.page.locator(this.inventory_item_name)).toBeVisible();
    }

    async click_on_finish() {
        await this.page.click(this.finish_btn);
    }

    async checkout_complete_message() {
        await expect(this.page.locator(this.complete_msg)).toContainText("Thank you for your order!");
    }
}

module.exports = CheckoutPage;  // Make sure the class is being exported correctly

