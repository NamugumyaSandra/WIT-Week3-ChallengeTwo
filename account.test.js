const BankAccount = require('./account');

describe(`Bank Account`, () => {

    it(`should call the class constructor`, () => {
        expect(BankAccount).toBeTruthy();
    });

    it(`Should return Initial deposit if opening bank account`, () => {
        const newAccount = new BankAccount('asdasfs',3450);
        expect(newAccount.open()).toBe('Initial Deposit: 3450 USD')
    });

    it(`Should return an error message if initial deposit less than 10USD`, () => {
        const newAccount = new BankAccount('asdasfs',5);
        expect(newAccount.open()).toBe('Initial deposit should be atleast 10 USD.')
    });

})
