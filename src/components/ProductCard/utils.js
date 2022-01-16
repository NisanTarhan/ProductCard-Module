function addDots(productTitle) {
    if (productTitle?.length > 86) {
        let productTitleWithDots = productTitle.slice(0, 86) + "...";
        return productTitleWithDots;
    }
    return productTitle
}

export default addDots;