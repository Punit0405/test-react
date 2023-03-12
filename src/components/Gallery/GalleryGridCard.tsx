import { useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio, NavDropdown } from "react-bootstrap";
import CreateCollectionModal from "../Modal/CreateCollectionModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./GalleryGrid.module.css";
import Moment from "react-moment";
import 'moment-timezone';

const GalleryGridCard = ({ collectionData }: any) => {

    const [modalShow, setModalShow] = useState(false);

    console.log(collectionData, '-----collectionData------------');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/gallery/collection/${collectionData.id}`)
    }

    return (
        <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
            <div className={styles.imgblock}>
                <Ratio aspectRatio='16x9' onClick={handleClick} className={styles.imgdivpoint}>
                    <Image className={styles.myimage} src="../../../sample2.jpg" />
                </Ratio>
                <div className={styles.outertitle}>
                    <p className={styles.title}>{collectionData.name}</p>
                    <NavDropdown
                        title={<i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>} className={styles.navdropdown} id="collasible-nav-dropdown gallerydropdown">
                        <NavDropdown.Item onClick={() => setModalShow(true)} >
                            <div className={styles.navicons}>
                                <i className="fa-sharp fa-regular navicons fa-pencil"></i>
                                <div className={styles.navtags}>Quick Edit</div>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <div className={styles.navicons}>
                                <i className="fa-solid navicons fa-link"></i>
                                <div className={styles.navtags}>Get Direct Link</div>
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <div className={styles.navicons}>
                                <i className="fa-solid navicons fa-trash-can"></i>
                                <div className={styles.navtags}>Delete Collection</div>
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className={styles.outerdetails}>
                    <p className={styles.details}>
                        <Moment format="MMMM  Do,YYYY">{collectionData.eventDate}</Moment>
                    </p>
                    <p className={styles.details}>230 photos</p>
                    <p className={styles.details}>1 videos</p>
                    <p className={styles.details}>{
                        collectionData && collectionData?.status === "UNPUBLISH" ? "Unpublish" : "Published"
                    }</p>
                </div>
            </div>
            <CreateCollectionModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                createNew={false}
                id={collectionData.id}
                name={collectionData.name}
                eventDate={collectionData.eventDate}
            />
        </Col>
    )
}

export default GalleryGridCard