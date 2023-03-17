import { Image } from "react-bootstrap";
import styles from "./Collection.module.css";

interface Props {
    imageUrl: string
}

const CollectionImageView = ({ imageUrl }: Props) => {
    return (
        <div className={styles.outerimg}>
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