import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(18rem, 1fr));
    grid-gap: 30px;
    height: 100%;
    width: 95%;
    padding: 20px;
    margin: 2rem auto;
    border-radius: 0.5rem;
    background: #27496d;
`;

export const StyledTitle = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    padding-top: 20px;
    padding-left: 30px;
`