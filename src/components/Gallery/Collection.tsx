import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Nav, NavItem, Navbar, Form } from "react-bootstrap";
import LayoutWithSideBar from "../LayoutWithSideBar";
import StudioSideBar from "../StudioSideBar";
import AddPhotosNav from "./AddPhotosNav";
import styles from "./Collection.module.css";


const Collection: FunctionComponent = () => {
    return (
        <LayoutWithSideBar>
            <>
                <Container fluid >
                    <AddPhotosNav />
                    <div className={styles.maincomp}>
                        <div className={styles.totalmedia}>
                            <p className={styles.totalcount}>Photos | 10</p>
                            <p className={styles.totalcount}>Videos | 09</p>
                        </div>
                        <div className={styles.outermain}>
                            <div className={styles.outerimg}>
                                <div className={styles.imgblock}>
                                    <div>
                                        <i className="fa-light fa-arrows-up-down-left-right"></i>
                                    </div>
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
                    </div>
                </Container>
            </>
        </LayoutWithSideBar>
    );
};

export default Collection;
