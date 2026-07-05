// import {test, expect} from '@playwright/test';
import { HomePage } from '../PageObjects/HomePage';
import { RegistrationPage } from '../PageObjects/RegistrationPage';
import { AccountPage } from '../PageObjects/AccountPage';
import testData from '../tests/Utils/paraBank.json';
import {Actions} from '../PageObjects/Actions';
import { customTest as test, expect} from '../fixtures/testfixture';

// for(const data of testData) {
    
//     test(`User Registration with data: ${data.username}`, async ({ page }) => {
//         const actions = new Actions(page);
//         const homePage = new HomePage(page);
//         const registrationPage = new RegistrationPage(page);
//         const accountPage = new AccountPage(page);
        
//         await actions.gotoUrl(homePage.pageUrl);
//         await actions.click(homePage.signInButton);
//         // await registrationPage.registerNewUser(
//         //     data.firstName,
//         //     data.lastName,
//         //     data.address,
//         //     data.city,
//         //     data.state,
//         //     data.zipCode,
//         //     data.phone,
//         //     data.ssn,
//         //     data.username,
//         //     data.password,
//         //     data.password
//         // );
//         await actions.fillText(registrationPage.firstNameInput, data.firstName);
//         await actions.fillText(registrationPage.lastNameInput, data.lastName);
//         await actions.fillText(registrationPage.addressInput, data.address);
//         await actions.fillText(registrationPage.cityInput, data.city);
//         await actions.fillText(registrationPage.stateInput, data.state);
//         await actions.fillText(registrationPage.zipCodeInput, data.zipCode);
//         await actions.fillText(registrationPage.phoneInput, data.phone);
//         await actions.fillText(registrationPage.ssnInput, data.ssn);
//         await actions.fillText(registrationPage.usernameInput, data.username);
//         await actions.fillText(registrationPage.passwordInput, data.password);
//         await actions.fillText(registrationPage.confirmPasswordInput, data.password);
//         await actions.click(registrationPage.registerButton);
//         await page.waitForTimeout(4000);
//         const accountHead = await actions.getText(accountPage.accountHead);
//         console.log(`Account Head: ${accountHead}`);

//         await expect(accountHead).toContainText(data.username);
//         await expect(await actions.getText(accountPage.accountSuccess)).toBeVisible();
//          await page.waitForTimeout(4000);
//     });
// }

test('User Registration through fixture data', async ({ page, testdataRegistration }) => {
    const actions = new Actions(page);   
    const homePage = new HomePage(page);
        const registrationPage = new RegistrationPage(page);
        const accountPage = new AccountPage(page);
    await test.step('Register a new user', async () => {
        await actions.gotoUrl(homePage.pageUrl);
        await actions.click(homePage.signInButton);
        });

        await test.step('Fill registration form and submit', async () => {
        await actions.fillText(registrationPage.firstNameInput, testdataRegistration.firstname);
        await actions.fillText(registrationPage.lastNameInput, testdataRegistration.lastname);
        await actions.fillText(registrationPage.addressInput, testdataRegistration.address);
        await actions.fillText(registrationPage.cityInput, testdataRegistration.city);
        await actions.fillText(registrationPage.stateInput, testdataRegistration.state);
        await actions.fillText(registrationPage.zipCodeInput, testdataRegistration.zipCode);
        await actions.fillText(registrationPage.phoneInput, testdataRegistration.phone);
        await actions.fillText(registrationPage.ssnInput, testdataRegistration.ssn);
        await actions.fillText(registrationPage.usernameInput, testdataRegistration.username);
        await actions.fillText(registrationPage.passwordInput, testdataRegistration.password);
        await actions.fillText(registrationPage.confirmPasswordInput, testdataRegistration.password);
        await actions.click(registrationPage.registerButton);
        });
        await page.waitForTimeout(4000);
    });
