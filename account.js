
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
            console.log(`Initial Deposit: ${this.balance} USD`);
        } else{
            console.log(`Initial deposit should be atleast ${this.minBalance} USD.`)
        }      
    }


    // //transactions
    // getBalance() {
    //     console.log(`Balance: ${this.balance} USD`)
    // };

    // deposit(amount) {
    //     if(this.status === false) {
    //         console.log('Invalid transaction');
    //     } else {
    //         this.balance += amount;
    //         this.getBalance();
    //     }
    // };

    // withdraw(amount) {
    //     if(this.status === false || amount > this.balance){
    //         console.log('Invalid transaction');
    //     }else {
    //         this.balance -= amount;
    //         this.getBalance();
    //     }
    // };
    

    // close(){
    //     if(this.status === false){
    //         console.log('You cannot perform any transactions.Account is closed.');
    //     }else{
    //         this.open();
    //     }
    // }
    
}

let newOwner = new BankAccount('asdasfs',3450)
newOwner.open();

// newOwner.getBalance();
// newOwner.deposit(2000);
// newOwner.withdraw(200);


module.exports = BankAccount;