import React from 'react'
import Grid from '../components/Grid'
import { Image } from 'react-bootstrap'
import styles from './GalleryClientView.module.css'

const GalleryClientView = () => {
  return (
    <>
      <div className={styles.maincomp}
        style={{
          backgroundImage: `url("../../images11.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        <div className={styles.titleblock}>
          <p className={styles.maintitle}>Test Collection</p>
          <p className={styles.maindate}>March 9th, 2023</p>
        </div>
        {/* <Image src='../../images11.jpg' /> */}
      </div>
      <div className={styles.titlediv}>
        <div className={styles.maintitleheading}>
          Tebogo Wedding
        </div>
        <div className={styles.iconblock}>
          <i className="fa-regular fa-heart viewpageicon"></i>
          <i className="fa-solid fa-arrow-down-to-line viewpageicon"></i>
          <i className="fa-solid fa-arrow-turn-down-left fa-rotate-180 viewpageicon"></i>
          <i className="fa-regular fa-play viewpageicon"></i>
        </div>
      </div>
      <Grid />
    </>

  )
}

export default GalleryClientView