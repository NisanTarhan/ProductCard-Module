import styled from 'styled-components';
import emptyHeartLogo from '../../images/empty-heart-logo.png';
import heartLogo from '../../images/heart-logo.png';

export const StyledProductCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;
    height: 400px;
    margin: auto;
    padding: 10px;
    background: orange;
    /* box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.15); */
    cursor: pointer;
    color: black;
    border-radius: 5px;
    transition: transform 0.25s ease-out;
    position: relative;
`

export const StyledImage = styled.img`
    width: 100%;
    height: 24.4rem;
    border-radius: 3px;
    margin-bottom: 0.75rem;
`

export const StyledText = styled.p`
    background: white;
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    line-height: 16px;
    height: 40px;
    /* width: 200px; */
    /* box-orient: vertical;   */
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    /* color: rgb(51, 51, 58); */
`

export const StyledPriceTag = styled.p`
    background: #CCCCCC;
    width: 98%;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
`

export const StyledCargoDescription = styled.p`
    font-size: 12px;
    font-weight: 600;
    margin-left:  ${props => props.cargoType === "Ücretli Kargo" ? "0" : "2.2rem"};
    padding-top: 5px;
    padding-bottom: 5px;
    color: #FFFF;
`

export const StyledHeartLogo = styled.img`
    height: 40px; 
    width: 40px;
    position: absolute;
    left: 15.7rem;
    top: 1rem;
`

export const StyledCargoLogo = styled.img`
    display: ${props => props.cargoType === "Ücretli Kargo" ? "none" : "block"};
    position: absolute;
    height: 30px; 
    width: 30px;
    bottom: 1.3rem;
`