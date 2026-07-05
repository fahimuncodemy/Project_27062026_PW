exports.AccountPage=
class AccountPage {
    constructor(page) {
        this.page= page;
        this.accountHead= page.locator("//h1[@class='title']");
        this.accountSuccess= page.locator("#rightPanel p");
    }

    // async getAccountHead() {
    //     return await this.accountHead;
    // }

    // async getAccountSuccess() {
    //     return await this.accountSuccess;
    // }
}