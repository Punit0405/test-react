import { FunctionComponent, useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"

const NavBarComponent: FunctionComponent = () => {
    return (
        <Navbar id="navbar" className={styles.navpadding}>
            <Container>
                <Nav.Link >
                    <Link to="/">
                        <Image className={styles.imagehome} alt="" src="../homeIcon.svg" />
                        <div className={styles.home}>Home</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/studiomanagement">
                        <img alt="" src="../172629-camera-video-icon-1.svg" />
                        <div className={styles.home}>Studio Management</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/gallery">
                        <img alt="" src="../galleryIcon.svg" />
                        <div className={styles.home}>Gallery</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/collection-setting">
                        <img alt="" src="../folderIcon.svg" />
                        <div className={styles.home}>Asset Registry</div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    <Link to="/music">
                        <img alt="" src="../musicIcon.svg" />
                        <div className={styles.home}>Music</div>
                    </Link>
                </Nav.Link>
            </Container>
        </Navbar>

    );
};

export default NavBarComponent;