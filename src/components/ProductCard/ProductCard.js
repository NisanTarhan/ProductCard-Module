import React, { useState } from 'react';
import emptyHeartLogo from './assets/empty-heart-logo.png';
import heartLogo from './assets/heart-logo.png';
import cargoLogo from './assets/cargo-icon.png';
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
import addDots from './utils'

const ProductCard = ({ data }) => {
    const [like, setLike] = useState(false);
    const { productName, price, cargo, link, imageUrl } = data;

    const toggleLikeClick = e => {
        e.preventDefault();
        setLike(!like);
    }

    const likeLogo = like ? heartLogo : emptyHeartLogo

    return (
        <StyledProductCard href={link} target="_blank" rel="noopener noreferrer">
            <StyledHeartLogo src={likeLogo} alt="Logo" onClick={toggleLikeClick} />
            <StyledImage data-testid="product-image" src={imageUrl} alt="product" />
            <StyledProductDescription data-testid="product-description">{addDots(productName)}</StyledProductDescription>
            <StyledPriceTag data-testid="price">{price?.toFixed(2)} TL</StyledPriceTag>
            <StyledCargoLogo cargoType={cargo} src={cargoLogo} alt="Logo" />
            <StyledCargoType data-testid="cargo-type" cargoType={cargo}>{cargo}</StyledCargoType>
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