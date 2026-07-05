exports.HomePage = 
class HomePage {
    constructor(page) {
        this.page= page;
        this.signInButton= page.locator("//a[text()='Register']");
        this.pageUrl= "https://parabank.parasoft.com/parabank/index.htm";
    }

    // async gotoUrl(url)
    // {
    //     await this.page.goto(url);
    // }

    // async clickSignIn(){
    //     await this.signInButton.click();
    // }
}