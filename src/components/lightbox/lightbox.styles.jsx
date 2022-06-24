import styled from "styled-components";
import {VscChromeClose} from 'react-icons/vsc';

export const CloseIcon=styled(VscChromeClose)`
    position: absolute;
    right: 15px;
    top:15px;
    font-size: 1.75rem;
    color: white;
    cursor: pointer;
    :hover{
        opacity:.45;
    }
`;

export const LightBoxImage=styled.div`
    position: relative;
    width:85%;
    height:85%;
    max-width:900px;
    border:1px solid lightgray;
    border-radius: 3px;
    margin-top:70px;
    margin-bottom: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width:1000px) {
        height:70%;
    }
    @media screen and (max-width:750px) {
        height:70%;
        max-height: 400px;
    }
    .next{
        transform: rotateY(180deg);
        right: 0;
    }
    .next,.previous{
        top:50%;
        position: absolute;
        font-size:2.5rem;
        cursor: pointer;
        padding: 5px;
        background-color:white;
        border-radius: 50%;
        :hover{
            opacity: .5;
        }
    }
    ${({imageurl})=>`background-image:url(${require(`../../assets${imageurl}`)})`}
    
`;
export const LightBoxContainer=styled.div`
    transition: opacity .45s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y:auto;
    background-color: rgba(0,0,0,.5);
    ${({currentindex})=>currentindex==-1?`opacity:0;z-index:-1;`:`opacity:1;z-index:10`}
`;