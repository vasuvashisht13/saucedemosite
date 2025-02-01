const { expect } = require("playwright/test");

class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        this.backpackProduct = "//div[normalize-space(text())='Sauce Labs Backpack']"; // Correct XPath with double quotes
        this.addToCartButton = '#add-to-cart';
        this.removebtn = '#remove'; 
    }

    // Method to add the backpack to the cart
    async addBagpackToCart() {
        await this.page.click(this.backpackProduct);
        await this.page.click(this.addToCartButton);
    }

    // Method to verify if the remove button is visible (indicating product added)
    async remove_btn_visible() {
        await expect(this.page.locator(this.removebtn)).toBeVisible();
    }
}

module.exports = ShoppingCartPage;
