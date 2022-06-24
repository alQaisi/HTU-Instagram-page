import { createContext,useContext,useState,useEffect } from "react";
import imagesData from '../../assets/data.json';


export const LightBoxContext=createContext({
    currentIndex:-1,
    currentImage:-1,
    setIndex:()=>null,
    setImage:()=>null,
    ImagesData:[]
});



export function LightBoxProvider({children}){

    function ImageBoxClickHandler(evt){
        setIndex(evt.currentTarget.id);
        setImage(0);
    }
    function closeLightBox(){
        setIndex(-1);
        setImage(-1);
    }
    function nextHandler(){
        const newImageIndex=currentImage+1;
        ImagesData[currentIndex][newImageIndex]!==undefined && setImage(newImageIndex);
    }
    function previousHandler(){
        const newImageIndex=currentImage-1;
        ImagesData[currentIndex][newImageIndex]!==undefined && setImage(newImageIndex);
    }
    const [currentIndex,setIndex]=useState(-1);
    const [currentImage,setImage]=useState(-1);
    const [ImagesData,setImages]=useState([]);
    useEffect(()=>setImages(imagesData),[]);
    useEffect(()=>{
        currentIndex==-1?document.body.style.overflowY='auto':document.body.style.overflowY='hidden';
    },[currentIndex])
    const value={currentIndex,currentImage,ImageBoxClickHandler,setImage,ImagesData,closeLightBox,nextHandler,previousHandler}
    return(
        <LightBoxContext.Provider value={value}>{children}</LightBoxContext.Provider>
    )
}