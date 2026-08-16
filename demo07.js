// Bank Account Demo

class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient balance!");
        }
    }

    showBalance() {
        console.log(`Account Holder: ${this.holderName}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: ₹${this.balance}`);
        console.log("---------------------------");
    }
}

const account = new BankAccount(
    "AC10025",
    "Atharva",
    25000
);

account.showBalance();

account.deposit(5000);
account.showBalance();

account.withdraw(8000);
account.showBalance();

account.withdraw(30000);
account.showBalance();