import styled from "styled-components";

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;

    @media (max-width: 576px){
        max-width: 300px;
        justify-content: center;
        font-size: 12px;
    }
`;

