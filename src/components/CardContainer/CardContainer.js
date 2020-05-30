import React from 'react';
import ProductCard from '../ProductCard';
import { StyledCardContainer, StyledTitle } from './styles';
import mockData from '../../mockData';

const CardContainer = () => {
    return (
        <>
            <StyledTitle>İlginizi Çekebilecek Ürünler</StyledTitle>
            <StyledCardContainer>
                {
                    mockData.map(product => <ProductCard key={product.id} data={product} />)
                }
            </StyledCardContainer>
        </>
    )
}

export default CardContainer;