import styled from "styled-components";

export const MultipleImagesIcon=styled.svg`
    width:50px;
    height:50px;
    display: block;
    margin-left: auto;
    position: relative;
    right:-3px;
    top:2px;
    transform:scale(.6);
`;

export const ImageContainer=styled.div`
    border-radius:3px;
    position: relative;
    width: 300px;
    height: 300px;
    width :100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    :hover{
        .icons{
            opacity: 1;
        }
    }
    .icons{
        transition: all .5s cubic-bezier(0.215, 0.610, 0.355, 1);
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #00000086;
        top:50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content:center;
        color: white;
        opacity: 0;
        .heart{
            margin-right: 30px;
        }
    }
    ${({images})=>`background-image:url(${require(`../../assets${images[0]}`)})`}
`;