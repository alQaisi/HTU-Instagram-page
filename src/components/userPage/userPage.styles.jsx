import styled from "styled-components";

export const PageContainer=styled.div`
    width: 1000px;
    box-sizing: border-box;
    display: block;
    margin:75px auto 25px;
    @media screen and (max-width:1075px) {
        width: 90%;
        margin:50px auto 20px;
    }
`;