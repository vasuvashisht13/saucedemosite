// Import the LoginPage class in the utils.js file
const LoginPage = require('../pages/LoginPage');  // Correct path based on your folder structure

// Login utility function
async function loginWithCredentials(page, username, password) {
    const lp = new LoginPage(page);
    await lp.navigate(); // Navigate to the login page
    await lp.login(username, password); // Perform login with provided credentials
}

module.exports = { loginWithCredentials }; // Export the utility function
