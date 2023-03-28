import { Image } from "react-bootstrap";
import styles from "./Collection.module.css";
import { useState, useEffect } from 'react';

interface Props {
    imageUrl: string,
    setSelect: any,
    isSelect: boolean
}

const CollectionImageView = ({ imageUrl, setSelect, isSelect }: Props) => {

    const [selectImg, setSelectImg] = useState(isSelect === true ? true : false)

    const handleClick = () => {
        if (!selectImg) {
            setSelect(1)
        } else {
            setSelect(-1)
        }
        setSelectImg(!selectImg)
    }

    return (
        <div className={selectImg ? `${styles.outerimg} ${styles.selectImg}` : `${styles.outerimg}`} draggable onClick={handleClick}>
            <i className="fa-sharp fa-light fa-up-down-left-right anchortag"></i>
            <div className={styles.imgblock}>
                <div className={styles.imgdiv}>
                    <Image className={styles.myimage} src={imageUrl} />
                </div>
            </div>
        </div>
    )
}

export default CollectionImageView