class BankAccount {
    constructor(owner,balance,status) {
        this.owner = owner;
        this.balance = balance;
        this.minBalance = 10; 
        this.status = status;
    }


    open(){
        this.status = 'open';
        if (this.balance >= this.minBalance){
            return `Initial Deposit: ${this.balance} USD`;
        } else{
            return `Initial deposit should be atleast ${this.minBalance} USD.`;
        }      
    }

//transactions
    getBalance() {
        if(this.status === 'open'){
            console.log(`Balance: ${this.balance} USD`)
        }else{
            console.log('Invalid transaction, account is closed')
        }
    };

    deposit(amount) {
        if(this.status === 'open') {
            this.balance += amount;
            this.getBalance();
        } else {
            console.log('Invalid transaction, account is closed');
        }
    };

    withdraw(amount) {
        if(this.status !== 'open' || amount > this.balance){
            console.log('Invalid transaction, account is closed');
        }else {
            this.balance -= amount;
            this.getBalance();
        }
    };
    

    close(){
        this.status = 'closed';
        console.log('You cannot perform any transactions. Account is closed.');    
    };
}

module.exports =BankAccount;

let newOwner = new BankAccount('asdasfs',3450)
newOwner.open();

newOwner.getBalance();
newOwner.deposit(2000);
newOwner.withdraw(200);
newOwner.close();
newOwner.deposit(2000);


