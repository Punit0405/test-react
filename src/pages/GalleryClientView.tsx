import React, { useEffect, useState } from 'react'
import Grid from '../components/Grid'
import { Image } from 'react-bootstrap'
import styles from './GalleryClientView.module.css'
import CollectionService from '../api/Collection/collection'
import { useStepContext } from '@mui/material'
import PasswordModal from '../components/Modal/PasswordModal'
import { NotificationWithIcon } from '../Utils/helper'
import { VALIDATIONS } from '../Utils/constants'
import { useParams } from 'react-router-dom'
import { FastField } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { clientGalleryViewAction } from '../redux/actions/clientGalleryViewAction'
import Constants from '../Config/Constants'

const GalleryClientView = () => {
  const [myState, setmystate] = useState(null);
  const [basicCollectionDetails, setBasicCollectionDetails] = useState<any>({});
  const [modalShow, setModalShow] = useState(false);
  const [collectionFound, setCollectionFoung] = useState(true)
  const [startSlideShow, setStartSlideShow] = useState(false)
  const clientState = useSelector((state: any) => state.clientCollectionViewReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const getCollectionDetails = async (password?: string) => {
    try {
      const data: any = {
        url: params.slug,
      }
      if (password) {
        data["password"] = password
      }
      const collectionDetails = await CollectionService.clientCollectionView(data);
      const basicCollectionDetails = {
        coverPhoto: collectionDetails.result.coverPhoto,
        name: collectionDetails.result.name,
        passwordRequired: collectionDetails.result.passwordRequired

      }
      const fullCollectionDetails = {
        ...collectionDetails.result
      }
      if (basicCollectionDetails.passwordRequired) {
        setModalShow(true)
      }
      setBasicCollectionDetails(basicCollectionDetails);
      setBasicCollectionDetails(fullCollectionDetails);

    } catch (error: any) {
      if (error.status === 400) {
        setModalShow(true);
      }
      if (error.status === 404) {
        setCollectionFoung(false);
      }
      NotificationWithIcon("error", error?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)

    }
  }

  const donwloadCollection= async()=>{
    try {
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    const response = await CollectionService.downloadCollection({pin:"2083"},30);
    const blobFile = new Blob([response?.data],{type: "application/zip"});
    const url = window.URL.createObjectURL(blobFile);
    a.href = url;
    a.setAttribute("download", response.headers.filename); 
    a.click();
    window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error)
    }
    

  }
  const passwordHandle = async (password: string) => {
    getCollectionDetails(password);
    setModalShow(false)

  }
  useEffect(() => {
    getCollectionDetails()
  }, [myState]);
  const startSlideShowFuunc = () => {
    dispatch(clientGalleryViewAction({ isSlideShow: true, isViewOpen: true }))
    setStartSlideShow(true)
  }
  return (

    <>
      {
        collectionFound ? <>
          <div  className={styles.maincomp}
            style={{
              backgroundImage: `url(${basicCollectionDetails?.coverPhoto})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              display:clientState.isViewOpen ? "none" : "flex"
            }}>
            <div className={styles.titleblock} style={{
              display:clientState.isViewOpen ? "none" : "block",
              fontFamily:`${Constants.fonts[basicCollectionDetails.typography]?.fontFamily}`
            }}>
              <p className={styles.maintitle}>{basicCollectionDetails?.name}</p>
              <p className={styles.maindate}>March 9th, 2023</p>
            </div>
          </div> : <></>
          <div className={styles.titlediv} >
            <div className={styles.maintitleheading}>
              {basicCollectionDetails?.name}
            </div>
            <div className={styles.iconblock}>
              <i className="fa-regular fa-heart viewpageicon"></i>
              <i className="fa-solid fa-arrow-down-to-line viewpageicon" onClick={donwloadCollection} style={{ cursor: "pointer" }}></i>
              <i className="fa-solid fa-arrow-turn-down-left fa-rotate-180 viewpageicon"></i>
              <i className="fa-regular fa-play viewpageicon" onClick={startSlideShowFuunc} style={{ cursor: "pointer" }}></i>
            </div>
          </div> : <></>
          {
            basicCollectionDetails?.files?.length ? <Grid startSlideShow={startSlideShow} imagesArr={basicCollectionDetails?.files} gridStyle={basicCollectionDetails?.gridStyle} gridSpacing={basicCollectionDetails?.gridSpacing} /> : <></>
          }

          <PasswordModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onSubmit={passwordHandle} ˀ
          />
        </> : <>Collection Not Found</>
      }
    </>

  )
}

export default GalleryClientView