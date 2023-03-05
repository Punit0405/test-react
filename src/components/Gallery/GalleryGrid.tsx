import { FunctionComponent } from "react";
import { Row} from "react-bootstrap";
import styles from "./GalleryGrid.module.css";
import GalleryGridCard from "./GalleryGridCard";


const GalleryGrid: FunctionComponent = () => {
    return (
        <Row className={styles.maincomp}>
           <GalleryGridCard/>
           <GalleryGridCard/>
           <GalleryGridCard/>
           <GalleryGridCard/>
           <GalleryGridCard/>
           <GalleryGridCard/>
        </Row>
    );
};

export default GalleryGrid;
