import React from "react"
import { render } from '@testing-library/react'
import CardContainer from "./CardContainer"

test('renders "LOADING..." when no data are given', () => {
    const { container } = render(<CardContainer data={[]} />)
    expect(container.lastChild.textContent).toMatch("LOADING...")
})

test('renders title of container', () => {
    const { container } = render(<CardContainer data={[]} />)
    expect(container.firstChild.textContent).toBe("İlginizi Çekebilecek Ürünler")
})