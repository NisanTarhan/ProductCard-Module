import React, { useState } from 'react';
import emptyHeartLogo from '../../images/empty-heart-logo.png';
import heartLogo from '../../images/heart-logo.png';
import cargoLogo from '../../images/cargo-icon.png';
import {
    StyledProductCard,
    StyledImage,
    StyledProductDescription,
    StyledPriceTag,
    StyledCargoType,
    StyledHeartLogo,
    StyledCargoLogo
} from './styles';

const ProductCard = ({ data }) => {
    const [like, setLike] = useState(false);
    const { id, productName, price, cargo, link } = data;

    function addDots(productTitle) {
        if (productTitle.length > 86) {
            let productTitleWithDots = productTitle.slice(0, 86) + "...";
            return productTitleWithDots;
        }
        return productTitle
    }

    const likeLogo = like ? heartLogo : emptyHeartLogo

    return (
        <StyledProductCard href={link} target="_blank" rel="noopener noreferrer">
            <StyledHeartLogo src={likeLogo} alt="Logo" onClick={(e) => {
                e.preventDefault();
                setLike(!like);
            }} />
            <StyledImage src={"https://dummyimage.com/159x241"} alt="product" />
            <StyledProductDescription>{addDots(productName)}</StyledProductDescription>
            <StyledPriceTag>{price}TL</StyledPriceTag>
            <StyledCargoLogo cargoType={cargo} src={cargoLogo} alt="Logo" />
            <StyledCargoType cargoType={cargo}>{cargo}</StyledCargoType>
        </StyledProductCard>
    )
}

export default ProductCard;