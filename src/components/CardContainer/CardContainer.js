import React, { useEffect, useState } from 'react';
import { database } from "../../config";
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';
import { StyledCardContainer, StyledTitle, StyledContainer } from './styles';

const CardContainer = () => {
    const [data, setData] = useState();
    useEffect(() => {
        database.ref("products").on('value', (snapshot) => {
            setData(snapshot.val())
        });
    }, [])

    return (
        <StyledContainer>
            <StyledTitle>İlginizi Çekebilecek Ürünler</StyledTitle>
            <StyledCardContainer>
                {
                    data ? data.map(product => <ProductCard key={product.id} data={product} />) : <Spinner />
                }
            </StyledCardContainer>
        </StyledContainer>
    )
}

export default CardContainer;