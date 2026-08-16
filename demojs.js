// Online Shopping Cart Demo

const products = [
    { id: 1, name: "Laptop", price: 55000, quantity: 1 },
    { id: 2, name: "Mouse", price: 800, quantity: 2 },
    { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
    { id: 4, name: "Headphones", price: 2500, quantity: 1 }
];

function calculateItemTotal(product) {
    return product.price * product.quantity;
}

function calculateCartTotal(products) {
    return products.reduce(
        (total, product) => total + calculateItemTotal(product),
        0
    );
}

console.log("===== SHOPPING CART =====");

products.forEach(product => {
    console.log(
        `${product.name} x ${product.quantity} = ₹${calculateItemTotal(product)}`
    );
});

const subtotal = calculateCartTotal(products);
const discount = subtotal > 50000 ? subtotal * 0.10 : 0;
const finalAmount = subtotal - discount;

console.log("-------------------------");
console.log(`Subtotal: ₹${subtotal}`);
console.log(`Discount: ₹${discount}`);
console.log(`Final Amount: ₹${finalAmount}`);

if (finalAmount > 50000) {
    console.log("Order placed with premium delivery!");
} else {
    console.log("Order placed successfully!");
}