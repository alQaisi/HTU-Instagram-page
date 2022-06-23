import {GalleryContainer} from './gallery.styles';
import ImageBox from '../imageBox/imageBox.component';
import { useContext } from 'react';
import {LightBoxContext} from '../context/lightbox.context';


function Gallery(){
    const {ImagesData}=useContext(LightBoxContext);
    return(
        <GalleryContainer>
            {
                ImagesData[0] && ImagesData.map((images,index)=><ImageBox key={index} boxId={index} images={images}/>)
            }
        </GalleryContainer>
    );
}
export default Gallery;