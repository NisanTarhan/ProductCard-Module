import React, { useState } from 'react';
import emptyHeartLogo from '../../images/empty-heart-logo.png';
import heartLogo from '../../images/heart-logo.png';
import cargoLogo from '../../images/cargo-icon.png';
import PropTypes from 'prop-types';
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
    const { productName, price, cargo, link, imageUrl } = data;

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
            <StyledImage src={imageUrl} alt="product" />
            <StyledProductDescription>{addDots(productName)}</StyledProductDescription>
            <StyledPriceTag>{price}TL</StyledPriceTag>
            <StyledCargoLogo cargoType={cargo} src={cargoLogo} alt="Logo" />
            <StyledCargoType cargoType={cargo}>{cargo}</StyledCargoType>
        </StyledProductCard>
    )
}

export default ProductCard;

ProductCard.propTypes = {
    productName: PropTypes.string,
    price: PropTypes.number,
    cargo: PropTypes.string,
    link: PropTypes.string,
    imageUrl: PropTypes.string
}

ProductCard.defaultProps = {
    productName: "Unknown",
    price: 0,
    cargo: "Ücretsiz Kargo",
    link: "https://www.gittigidiyor.com",
    imageUrl: "https://dummyimage.com/159x241"
}