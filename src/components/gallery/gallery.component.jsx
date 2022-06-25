import {GalleryContainer} from './gallery.styles';
import ImageBox from '../imageBox/imageBox.component';
import { useContext } from 'react';
import {LightBoxContext} from '../context/lightbox.context';


function Gallery(){
    const {ImagesData}=useContext(LightBoxContext);
    const images=ImagesData && ImagesData.map((images,index)=><ImageBox key={index} boxId={index} images={images}/>)
    return(
        <GalleryContainer>
            {
                images
            }
        </GalleryContainer>
    );
}
export default Gallery;