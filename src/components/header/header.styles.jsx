import styled,{css} from "styled-components";
import {RiSettings3Fill} from 'react-icons/ri';
export const SettingsIcon=styled(RiSettings3Fill)`
    margin-left: 15px;
    cursor: pointer;
    color: black;
    transition: all .75s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size:1.4rem;
    &:hover{
        opacity:.60;
    }
`;
export const ProfileImage=styled.img`
    height: auto;
    width:175px;
    border-radius:50%;
`;
export const HeaderButton=styled.button`
    font-weight:700;
    font-size:1rem;
    background-color: transparent;
    border:1px solid hsl(0, 0%, 59%);
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background-color: white;
    padding: 3px 20px;
    transition: all .75s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover{
        opacity: .5;
    }
`;

const InfoLinesStyles=css`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    justify-items: flex-start;
`;
export const FirstLine=styled.div`
    ${InfoLinesStyles};
    & h1{
        font-weight: 400;
        font-size:2.15rem;
        margin-block: 0;
        margin-right: 40px;
    }
`;
export const SecondLine=styled.div`
    ${InfoLinesStyles};
    & span{
        font-weight:700;
    }
    p:first-of-type{
        margin-left: 50px;
    }
    p{
        font-size: 1.1rem;
        margin-right:45px;
    }
`;

export const Bio=styled.p`
    line-height:27px;
    font-size:1rem;
    display: none;
`
export const State=styled.div`
    margin-top: 30px;
    border-top:1px solid #8d8d8d;
    border-bottom:1px solid #8d8d8d;
    display: none;
    justify-content: space-around;
    text-align: center;
    p{
        line-height:27px;
        letter-spacing:1px;
        font-size:.95rem
    }
    span{
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const HeaderContainer=styled.div`
    display:flex;
    justify-content: space-around;
    align-items: flex-start;
    .infoContainer{
        width:65%;
        .lastLine p{
            line-height:27px;
            letter-spacing:1px;
            font-size:1.05rem
        }
    }
    @media screen and (max-width:1075px) {
        justify-content: center;
        ${ProfileImage}{
            width: 150px;
            margin-right:50px;
        }
        .infoContainer{
            width: initial;
            flex-grow: 2;
            margin-bottom: 20px;
            .lastLine p{
                line-height:27px;
                letter-spacing:1px;
                font-size:1.05rem
            }
        }
    }
    @media screen and (max-width:768px){
        ${ProfileImage}{
            width:100px;
            margin-right:25px;
        }
        ${SettingsIcon}{
            position: absolute;
            left:75%;
            top:15px;
        }
        ${FirstLine}{
            flex-direction: column;
            align-items: flex-start;
            ${HeaderButton}{
                width: 100%;
                margin-top:20px;
            }
        }
        ${SecondLine},.lastLine{
            display: none;
        }
        &+.mobile-items{
            ${Bio}{
                display: initial;
            }
            ${State}{
            display: flex;
            }
        }
    }
`;