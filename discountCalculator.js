function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger
    let totalPrice = 0;
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}

console.log(calculateDiscountedPrice(5, 20))

module.exports = calculateDiscountedPrice;
