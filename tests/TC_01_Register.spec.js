import {test, expect} from '@playwright/test';
import { HomePage } from '../PageObjects/HomePage';
import { RegistrationPage } from '../PageObjects/RegistrationPage';
import { AccountPage } from '../PageObjects/AccountPage';
import testData from '../tests/Utils/paraBank.json';

// for(const data of testData) {
for(let i=0; i<=testData.length-1; i++) {
    
    test(`User Registration with data: ${i+1}`, async ({ page }) => {
        const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        const accountPage = new AccountPage(page);
        
        await homePage.gotoUrl('https://parabank.parasoft.com/parabank/index.htm');
        await homePage.clickSignIn();
        await registrationPage.registerNewUser(
            data.firstName,
            data.lastName,
            data.address,
            data.city,
            data.state,
            data.zipCode,
            data.phone,
            data.ssn,
            data.username,
            data.password,
            data.password
        );
        await page.waitForTimeout(4000);
        const accountHead = await accountPage.getAccountHead();
        console.log(`Account Head: ${accountHead}`);

        await expect(accountHead).toContainText(data.username);
        await expect(await accountPage.getAccountSuccess()).toBeVisible();
         await page.waitForTimeout(4000);
    });
}

test.skip('User Registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const registrationPage = new RegistrationPage(page);

    await homePage.gotoUrl('https://parabank.parasoft.com/parabank/index.htm');

    await homePage.clickSignIn();

    await registrationPage.registerNewUser(
        'John', 
        'Doe',
        '123 Main St',
        'Anytown',
        'CA',
        '12345',
        '555-1234',
        '123-45-6789',
        'johndoe',
        'password123',
        'password123'
    );

    await page.waitForTimeout(4000);
})