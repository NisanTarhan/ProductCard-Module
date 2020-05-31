import React, { useEffect, useState } from 'react';
import { database } from "../../config";
import ProductCard from '../ProductCard';
import { StyledCardContainer, StyledTitle } from './styles';

const CardContainer = () => {
    const [data, setData] = useState();
    useEffect(() => {
        database.ref("products").on('value', (snapshot) => {
            setData(snapshot.val())
        });
    }, [])

    return (
        <>
            <StyledTitle>İlginizi Çekebilecek Ürünler</StyledTitle>
            <StyledCardContainer>
                {
                    data ? data.map(product => <ProductCard key={product.id} data={product} />) : "LOADING..."
                }
            </StyledCardContainer>
        </>
    )
}

export default CardContainer;