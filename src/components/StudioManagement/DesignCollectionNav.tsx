import React from 'react'
import { Image } from 'react-bootstrap'
import styles from './Design.module.css'

const DesignCollectionNav = () => {
    return (
        <>
            <div className={styles.titlediv1}>
                <div className={styles.maintitleheading}>
                    Tebogo Wedding
                </div>
                <div className={styles.iconblock}>
                    <i className="fa-regular fa-heart viewpageicondedesign"></i>
                    <i className="fa-solid fa-arrow-down-to-line viewpageicondedesign"></i>
                    <i className="fa-solid fa-arrow-turn-down-left fa-rotate-180 viewpageicondedesign"></i>
                    <i className="fa-regular fa-play viewpageicondedesign"></i>
                </div>
            </div>
        </>

    )
}

export default DesignCollectionNav