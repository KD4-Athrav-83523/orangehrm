function calculateBill(items) {
    let total = 0;

    for (let item of items) {
        total += item.price * item.quantity;
    }

    if (total >= 5000) {
        total = total - (total * 10 / 100);
    }

    return total;
}

const cart = [
    { name: "Laptop", price: 45000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

const finalAmount = calculateBill(cart);

console.log("Final Bill Amount: ₹" + finalAmount);