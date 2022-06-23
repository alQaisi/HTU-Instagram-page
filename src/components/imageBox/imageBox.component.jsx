import {ImageContainer,MultipleImagesIcon} from './imageBox.styles';
import { useContext } from 'react';
import {LightBoxContext} from '../context/lightbox.context';
import {AiFillHeart} from 'react-icons/ai';
import {FaComment} from "react-icons/fa";

const Icon=function(){
    return(
        <MultipleImagesIcon aria-label="Carousel"  color="#ffffff" fill="#ffffff" ><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></MultipleImagesIcon>
    );
}

function ImageBox({images,boxId}){
    const {ImageBoxClickHandler}=useContext(LightBoxContext);
    return(
        <ImageContainer id={boxId} images={images} onClick={ImageBoxClickHandler}>
            {
                images.length>1?
                <Icon/>
                :<></>
            }
            <div className="icons">
                <h3>115 <AiFillHeart className='heart'/></h3>
                <h3>55 <FaComment className='comments'/></h3>
            </div>
        </ImageContainer>
    );
}
export default ImageBox;