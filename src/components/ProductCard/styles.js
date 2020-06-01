import styled from 'styled-components';

export const StyledProductCard = styled.a`
    display: flex;
    flex-direction: column;
    width: 288px;
    height: 440px;
    margin: auto;
    padding: 10px;
    background-color: #ffff;
    text-decoration: none;
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.15);
    cursor: pointer;
    color: black;
    border-radius: 5px;
    transition: transform 0.25s ease-out;
    position: relative;

      &:hover {
        transform: scale(1.05);
    }
`

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 280px;
    border-radius: 3px;
    margin-bottom: 0.75rem;
`

export const StyledProductDescription = styled.p`
    
    background-color: #ffff;
    font-size: 0.8rem;
    font-weight: 600;
    padding-left: 2px;
    /* padding-bottom: 10px; */
    margin-bottom: 10px;
    line-height: 1rem;
    height: 2.4rem;
    /* width: 200px; */
    /* box-orient: vertical;   */
    /* line-clamp: 2; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    /* white-space: normal; */
    /* box-orient: vertical; */
    /* color: rgb(51, 51, 58); */
`

export const StyledPriceTag = styled.p`
    background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
    width: 98%;
    border-radius: 6px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
    padding-left: 7px;
    padding-bottom: 5px;
    margin: 0;
    line-height: 1.6rem;
`

export const StyledCargoType = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    margin-left:  ${props => props.cargoType === "Ücretli Kargo" ? "0" : "2.2rem"};
    padding-top: 10px;
    padding-left: 2px;
    padding-bottom: 5px;
`

export const StyledHeartLogo = styled.img`
    background: white;
    border-radius: 50%;
    background-image: url(emptyHeartLogo);
    height: 40px; 
    width: 40px;
    position: absolute;
    left: 15.7rem;
    top: 1rem;

    &:hover{
         transform: scale(1.10);

    }
`

export const StyledCargoLogo = styled.img`
    background-color: #7FBB42;
    border-radius: 3px;
    display: ${props => props.cargoType === "Ücretli Kargo" ? "none" : "block"};
    position: absolute;
    height: 30px; 
    width: 30px;
    bottom: 1.3rem;
`