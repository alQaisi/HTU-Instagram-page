import {LightBoxContainer,LightBoxImage,CloseIcon} from './lightbox.styles';
import { useContext } from 'react';
import {LightBoxContext} from '../context/lightbox.context';
import {GrFormPrevious} from "react-icons/gr";

function LightBox(){
    const {currentIndex,currentImage,ImagesData,closeLightBox,previousHandler,nextHandler}=useContext(LightBoxContext);
    let imageUrl;
    if (ImagesData.length>-1 && currentImage>-1){
        imageUrl=ImagesData[currentIndex][currentImage];
    } 
    return(
        <LightBoxContainer currentindex={`${currentIndex}`}>
            <CloseIcon onClick={closeLightBox}/>
            {
                imageUrl?
                <LightBoxImage imageurl={`${imageUrl}`}>
                    {
                        ImagesData[currentIndex].length>1?
                        <>
                            <GrFormPrevious className='previous' onClick={previousHandler}/>
                            <GrFormPrevious className='next' onClick={nextHandler}/>
                        </>
                        :<></>
                    }
                    
                </LightBoxImage>
                :<></>
            }
            
        </LightBoxContainer>
    );
}
export default LightBox;