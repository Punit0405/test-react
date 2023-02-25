import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryNav from "../components/Gallery/GalleryNav";
import NavLayout from "../components/NavLayout";
import Constants from "../Config/Constants";
import styles from "./Gallery.module.css";

const Gallery: FunctionComponent = () => {
    return (
        <NavLayout activeTab={Constants.NavbarTabs.GALLARY}>
            <>
                <GalleryNav />
                <div className={styles.collectioncount}>
                    <p className={styles.collectioncountdis}>
                        6 collections
                    </p>
                </div>
                <GalleryGrid />
            </>
        </NavLayout>
    );
};

export default Gallery;
