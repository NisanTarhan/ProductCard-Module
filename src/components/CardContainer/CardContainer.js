import React from 'react';
import ProductCard from '../ProductCard';
import { StyledCardContainer } from './styles';
import mockData from '../../mockData';

const CardContainer = () => {
    return (
        <StyledCardContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </StyledCardContainer>
    )
}

export default CardContainer;