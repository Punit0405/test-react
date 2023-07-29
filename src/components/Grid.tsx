import { FunctionComponent, useCallback, useRef, useState } from "react";
import { Button, Container, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "./NavbarComponent";
import TopBarComponent from "./TopBarComponent";
import styles from "./Layout.module.css";
import Gallery from "react-photo-gallery";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { truncate } from "fs/promises";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { clientGalleryViewAction } from "../redux/actions/clientGalleryViewAction";
import CollectionService from "../api/Collection/collection";
import PinModal from "./Modal/PinModal";
import { NotificationWithIcon } from "../Utils/helper";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../Utils/constants'






interface Props {
    children: JSX.Element;
}

const Grid = (props:any) => {
    const images = props.imagesArr ? props.imagesArr:[];
    const [currentImage, setCurrentImage] = useState(0);
    const [pinModalShow, setPinModalShow] = useState(false);
    const dispatch = useDispatch();
    const [downloadPer, setDownloadPer] = useState(0)
    const imageGalleryRef = useRef<any>(null)
    const clientState = useSelector((state: any) => state.clientCollectionViewReducer);
    const newData:any = [];
    const getColumnNumbers = ()=>{
      if(screen.width < 400){
        return 2;
      }else if(screen.width < 600){
        return 3;
      }else{
        return 4;
      }
    }
    for(const image of images){
        newData.push({
            src:image.url,
            height:image.height,
            width:image.width
        })
    }
    const openLightbox = useCallback((event:any, { photo, index }:any) => {
        dispatch(clientGalleryViewAction({isSlideShow:false,isViewOpen:true}))
        setCurrentImage(index);
      }, []);
    
      const closeLightbox = () => {
        dispatch(clientGalleryViewAction({isSlideShow:false,isViewOpen:false}))
        setCurrentImage(0);
      };
    const downloadFile= async(pin?:any)=>{
      try {
      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);
      const currentFileIndex = imageGalleryRef.current.getCurrentIndex();
      const file = images[currentFileIndex];
      const response = await CollectionService.downloadFile({pin:pin},file.id,setDownloadPer);
      const blobFile = new Blob([response?.data],{type: response.headers.fileext});
      const url = window.URL.createObjectURL(blobFile);
      a.href = url;
      a.setAttribute("download", response.headers.filename); 
      a.click();
      window.URL.revokeObjectURL(url);
      } catch (error) {
      }
      

    }
    const downloadPinCheck = async () => {
      try {      
        const response = await CollectionService.downloadFilePinCheck({}, images[imageGalleryRef.current.getCurrentIndex()].id)
        if(response.donwloadPinRequired){
          setPinModalShow(true);
        }else{
          downloadFile();
        }
        
      } catch (err: any) {
        setPinModalShow(false)
        if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
          NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
        } else {
          NotificationWithIcon("error", "Invalid pin" || VALIDATIONS.SOMETHING_WENT_WRONG)
        }
      }
  
  
    }
   
    return (
        <div className={styles.maincomp}>
            {clientState.isViewOpen?
            <div className={styles.ImageGalleryMainDiv} >
            <i className="fx-sharp fa-regular fa-circle-xmark fa-xl cancelImageBtn" onClick={closeLightbox} style={{cursor: "pointer"}}></i>
            <i className="fa-regular fa-arrow-down-to-line fa-xl clientDownloadBtn " onClick={e=>downloadPinCheck()}></i>
            <div className={styles.ImageGalleryInnerDiv}>
            <div className={styles.ImageGalleryDiv}>
            <ImageGallery items={newData.map((image:any)=>{
                return {
                 original:image.src,
                 thumbnail:image.src,
                 originalTitle:image.src
                }
            })} swipingTransitionDuration={3}  
             slideDuration={500} 
             ref={imageGalleryRef}
             slideInterval={3000}
             showThumbnails={false}
             startIndex={currentImage} autoPlay={clientState.isSlideShow} showNav={true} lazyLoad/>
            </div>
            </div>
            </div>
            :
            <Gallery photos={newData} onClick={openLightbox} columns={getColumnNumbers()} margin={props.gridSpacing === "large" ? 8:3}  direction={props.gridStyle} />
            }
            <PinModal
            show={pinModalShow}
            onHide={() => setPinModalShow(false)}
            downloadfunction={downloadFile}
          />
           
        
            
        </div>
    );
};

export default Grid;
