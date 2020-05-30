import React, { useState } from 'react';
import emptyHeartLogo from '../../images/empty-heart-logo.png';
import heartLogo from '../../images/heart-logo.png';
import cargoLogo from '../../images/cargo-icon.png';
import { StyledProductCard, StyledImage, StyledText, StyledPriceTag, StyledCargoDescription, StyledHeartLogo, StyledCargoLogo } from './styles';

const ProductCard = ({ data }) => {
    const { id, productName, price, cargo } = data;

    return (
        <StyledProductCard>
            <StyledHeartLogo src={emptyHeartLogo} alt="Logo" onClick={() => { alert("LIKE") }} />
            <StyledImage src={"https://dummyimage.com/159x241"} alt="product" />
            <StyledText>{productName}</StyledText>
            <StyledPriceTag>{price}TL</StyledPriceTag>
            {/* <div style={{ display: "none" }}> */}
            <StyledCargoLogo cargoType={cargo} src={cargoLogo} alt="Logo" />
            {/* </div> */}
            <StyledCargoDescription cargoType={cargo}>{cargo}</StyledCargoDescription>
        </StyledProductCard>
    )
}

export default ProductCard;