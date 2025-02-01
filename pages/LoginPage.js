class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = "h3[data-test='error']";
        this.pageTitle = "span.title"; // Element to check successful login
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoginSuccessful() {
        return await this.page.locator(this.pageTitle).isVisible();
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}

module.exports = LoginPage;
