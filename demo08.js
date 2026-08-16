// ATM Machine Simulation

let balance = 25000;
let pin = 1234;

function checkPin(inputPin) {
    return inputPin === pin;
}

function checkBalance() {
    console.log(`Current Balance: ₹${balance}`);
}

function deposit(amount) {
    balance += amount;
    console.log(`₹${amount} deposited successfully.`);
}

function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient balance!");
    } else if (amount <= 0) {
        console.log("Invalid amount!");
    } else {
        balance -= amount;
        console.log(`₹${amount} withdrawn successfully.`);
    }
}

function atm(pinInput) {
    if (!checkPin(pinInput)) {
        console.log("Incorrect PIN!");
        return;
    }

    console.log("Login successful!");
    console.log("----------------------");

    checkBalance();

    deposit(5000);
    checkBalance();

    withdraw(7000);
    checkBalance();

    withdraw(50000);
    checkBalance();
}

atm(1234);