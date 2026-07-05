import {test, expect} from '@playwright/test';

export const customTest= test.extend({
    testdataRegistration: {
        firstname: 'John',
        lastname: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        phone: '555-1234',
        ssn: '123-45-6789',
        username: `${Date.now()}johndoe800`,
        password: 'password123'
    }});

    export {expect};