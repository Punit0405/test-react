import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio } from "react-bootstrap";
import styles from "./GalleryGrid.module.css";


const GalleryGrid: FunctionComponent = () => {
    return (
        <Row className={styles.maincomp}>
            <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample2.jpg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample.jpeg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample2.jpg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample.jpeg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>

            <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample2.jpg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>
            <Col xl={3} lg={4} sm={6} >
                <div className={styles.imgblock}>
                    <Ratio aspectRatio='16x9'>
                        <Image className={styles.myimage} src="../../../sample.jpeg" />
                    </Ratio>
                    <div className={styles.outertitle}>
                        <p className={styles.title}>Tebogo Wedding</p>
                        <i className="fa-regular fa-ellipsis setcolor galleryicon"></i>
                    </div>
                    <div className={styles.outerdetails}>
                        <p className={styles.details}>January 6th,2023</p>
                        <p className={styles.details}>230 photos</p>
                        <p className={styles.details}>1 videos</p>
                        <p className={styles.details}>Publised</p>
                    </div>
                </div>
            </Col>        </Row>
    );
};

export default GalleryGrid;
