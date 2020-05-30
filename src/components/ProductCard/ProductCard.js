import React, { useState } from 'react';
import emptyHeartLogo from '../../images/empty-heart-logo.png';
import heartLogo from '../../images/heart-logo.png';
import cargoLogo from '../../images/cargo-icon.png';
import { StyledProductCard, StyledImage, StyledProductDescription, StyledPriceTag, StyledCargoType, StyledHeartLogo, StyledCargoLogo } from './styles';

const ProductCard = ({ data }) => {
    const [like, setLike] = useState(false);
    const { id, productName, price, cargo, link } = data;

    const likeLogo = like ? heartLogo : emptyHeartLogo

    return (
        <StyledProductCard href={link} target="_blank" rel="noopener noreferrer">
            <StyledHeartLogo src={likeLogo} alt="Logo" onClick={(e) => {
                e.preventDefault();
                setLike(!like);
            }} />
            <StyledImage src={"https://dummyimage.com/159x241"} alt="product" />
            <StyledProductDescription>{productName}</StyledProductDescription>
            <StyledPriceTag>{price}TL</StyledPriceTag>
            {/* <div style={{ display: "none" }}> */}
            <StyledCargoLogo cargoType={cargo} src={cargoLogo} alt="Logo" />
            {/* </div> */}
            <StyledCargoType cargoType={cargo}>{cargo}</StyledCargoType>
        </StyledProductCard>
    )
}

export default ProductCard;