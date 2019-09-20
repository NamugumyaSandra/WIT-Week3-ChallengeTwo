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

    it(`Should return current balance if account is open`, () => {
        const newAccount = new BankAccount('asdasfs',15,'open');
        expect(newAccount.getBalance()).toBe('Balance: 15 USD')
    });

    it(`Should return 'Invalid transaction, account is closed' if account is closed`, () => {
        const newAccount = new BankAccount('asdasfs',15,'closed');
        expect(newAccount.getBalance()).toBe('Invalid transaction, account is closed')
    });

    it(`Should return new balance after deposit if account is open`, () => {
        const newAccount = new BankAccount('asdasfs',15,'open');
        expect(newAccount.deposit(200)).toBe('Balance: 215 USD')
    });

    it(`Should return 'Invalid transaction, account is closed' if account is closed`, () => {
        const newAccount = new BankAccount('asdasfs',15,'closed');
        expect(newAccount.deposit(200)).toBe('Invalid transaction, account is closed')
    });

    it(`Should return new balance after withdraw if account is open and amount is less than balance`, () => {
        const newAccount = new BankAccount('asdasfs',15,'open');
        expect(newAccount.withdraw(5)).toBe('Balance: 10 USD')
    });

    it(`Should return 'Invalid transaction, please check balance and if account is open' if account is closed`, () => {
        const newAccount = new BankAccount('asdasfs',15,'closed');
        expect(newAccount.withdraw(5)).toBe('Invalid transaction, please check balance and if account is open')
    });

    it(`Should return 'Invalid transaction, please check balance and if account is open' if account is open but low balance`, () => {
        const newAccount = new BankAccount('asdasfs',15,'closed');
        expect(newAccount.withdraw(25)).toBe('Invalid transaction, please check balance and if account is open')
    });


})
