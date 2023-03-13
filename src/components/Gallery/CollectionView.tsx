import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Nav, NavItem, Navbar, Form, TabContainer } from "react-bootstrap";

import styles from "./Collection.module.css";


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
                        <div className={styles.outerimg}>
                            <div className={styles.tagicon}>
                                <i className="fa-light fa-arrows-up-down-left-right anchortag"></i>
                            </div>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images11.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images12.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images13.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images14.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images15.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images16.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images16.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images13.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images11.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.outerimg}>
                            <div className={styles.imgblock}>
                                <div className={styles.imgdiv}>
                                    <Image className={styles.myimage} src="../../../images12.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CollectionView;
