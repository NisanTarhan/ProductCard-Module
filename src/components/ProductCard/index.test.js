import React from "react"
import { render } from '@testing-library/react'
import ProductCard from "./ProductCard.js"
import addDots from './utils';



test("ProductCard renders correctly", () => {
    const product = {
        id: 1,
        productName: "Unknown",
        price: 0,
        cargo: "Ücretsiz Kargo",
        link: "https://www.gittigidiyor.com",
        imageUrl: "https://dummyimage.com/159x241"
    }
    const { getByTestId } = render(<ProductCard data={product} />)
    expect(getByTestId('product-description').textContent).toBe("Unknown")
    expect(getByTestId('price').textContent).toBe("0.00 TL")
    expect(getByTestId('cargo-type').textContent).toBe("Ücretsiz Kargo")
})

test("return undefined if productTitle does not exist", () => {
    const productTitle = undefined
    const result = addDots(productTitle)
    expect(result).toBeUndefined()
})

test("return productTitle if its length is lower than 86", () => {
    const productTitle = "Apple"
    const result = addDots(productTitle)
    expect(result).toBe(productTitle);
})

test("return the productTitle which is added three dots at the end if its length is higher than 86", () => {
    const productTitle = "Xiaomi Redmi Note 7 6GB Cep Telefonu (Xiaomi Türkiye Garantili) Genpa Xiaomi Türkiye Garantili"
    const result = addDots(productTitle)
    let productTitleWithDots = productTitle.slice(0, 86) + "...";
    expect(result).toBe(productTitleWithDots)
})