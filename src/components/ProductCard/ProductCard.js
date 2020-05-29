import React, { useState } from 'react';
import { StyledProductCard, StyledImage, StyledText, StyledPriceTag, StyledCargoDescription } from './styles';

const ProductCard = () => {
    return (
        <StyledProductCard>
            <StyledImage src={"https://dummyimage.com/159x241"} alt="product" />
            <StyledText>Apple iPhone Apple iPhone  Apple iPhone 11 Pro Max 256 GB Altın Cep Telefonu (Apple Türkiye Garantili)</StyledText>
            <StyledPriceTag>3.4999,00 TL</StyledPriceTag>
            <StyledCargoDescription>Ücretsiz Kargo</StyledCargoDescription>
        </StyledProductCard>
    )
}

export default ProductCard;