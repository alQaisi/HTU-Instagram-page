import styled from "styled-components";

export const GalleryContainer=styled.div`
    margin-top: 30px;
    display: grid;
    gap:20px;
    grid-template-columns: repeat(auto-fill,minmax(285px,1fr));
    align-items: center;
    justify-content: center;
    place-items: center;
`;