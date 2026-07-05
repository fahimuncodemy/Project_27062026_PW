exports.RegistrationPage=
class RegistrationPage {
    constructor(page) {
        this.page= page;
        this.firstNameInput= page.locator("//input[@id='customer.firstName']");
        this.lastNameInput= page.locator("//input[@id='customer.lastName']");
        this.addressInput= page.locator("//input[@id='customer.address.street']");
        this.cityInput= page.locator("//input[@id='customer.address.city']");
        this.stateInput= page.locator("//input[@id='customer.address.state']");
        this.zipCodeInput= page.locator("//input[@id='customer.address.zipCode']");
        this.phoneInput= page.locator("//input[@id='customer.phoneNumber']");
        this.ssnInput= page.locator("//input[@id='customer.ssn']");
        this.usernameInput= page.locator("//input[@id='customer.username']");
        this.passwordInput= page.locator("//input[@id='customer.password']");
        this.confirmPasswordInput= page.locator("//input[@id='repeatedPassword']");
        this.registerButton= page.locator("//input[@type='submit'][@value='Register']");
    }

    // async registerNewUser(firstName, lastName, address, city, state, zipCode, phone, ssn, username, password, confirmPassword) {
    //     await this.firstNameInput.fill(firstName);
    //     await this.lastNameInput.fill(lastName);
    //     await this.addressInput.fill(address);
    //     await this.cityInput.fill(city);
    //     await this.stateInput.fill(state);
    //     await this.zipCodeInput.fill(zipCode);
    //     await this.phoneInput.fill(phone);
    //     await this.ssnInput.fill(ssn);
    //     await this.usernameInput.fill(username);
    //     await this.passwordInput.fill(password);
    //     await this.confirmPasswordInput.fill(confirmPassword);
    //     await this.registerButton.click();
    // }
}