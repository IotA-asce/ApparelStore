const computeDiscount = (basePrice, discountRate) => {
    return (basePrice - (basePrice * discountRate / 100)).toString();
}

export { computeDiscount };