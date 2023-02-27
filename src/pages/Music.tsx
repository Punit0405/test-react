import { FunctionComponent } from "react";
import { Button, Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import MusicNav from "../components/Music/MusicNav";
import MusicSideComp from "../components/Music/MusicSideComp";
import styles from "./Music.module.css"

const Music: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <Navbar bg="" expand="sm" className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        <Button variant="custom" className={styles.navbtnsort}>
                            <p>Sort By</p>
                            <i className="fa-regular fa-arrow-right-arrow-left"></i>
                        </Button>
                        <Button variant="custom" className={styles.navbtndown}>
                            <p>Downloads</p>
                            <i className="fa-sharp  fa-regular fa-arrow-down-to-line"></i>
                        </Button>
                        <Button variant="custom" className={styles.navbtncollection}>
                            <p>Collections</p>
                            <i className="fa-regular  fa-pen-to-square"></i>
                        </Button>
                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-false"
                            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                            placement="start"
                        >

                            <Offcanvas.Body>
                                <MusicSideComp />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        </Layout >
    );
};

export default Music;
