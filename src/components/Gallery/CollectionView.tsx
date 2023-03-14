import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Nav, NavItem, Navbar, Form, TabContainer } from "react-bootstrap";
import styles from "./Collection.module.css";
import CollectionImageView from "./CollectionImage";

const CollectionView: FunctionComponent = () => {
    return (
        <>
            <div className={styles.maincomp}>
                <div className={styles.totalmedia}>
                    <p className={styles.totalcount}>Photos | 10</p>
                    <p className={styles.totalcount}>Videos | 09</p>
                </div>
                <Container fluid>
                    <div className={styles.outermain}>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images13.jpg"/>
                        <CollectionImageView imageUrl="../../../images14.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images13.jpg"/>
                        <CollectionImageView imageUrl="../../../images14.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images13.jpg"/>
                        <CollectionImageView imageUrl="../../../images14.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                        <CollectionImageView imageUrl="../../../images13.jpg"/>
                        <CollectionImageView imageUrl="../../../images14.jpg"/>
                        <CollectionImageView imageUrl="../../../images11.jpg"/>
                        <CollectionImageView imageUrl="../../../images12.jpg"/>
                    
                        
                        
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CollectionView;
