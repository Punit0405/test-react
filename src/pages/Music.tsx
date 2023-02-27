import { FunctionComponent } from "react";
import { Button, Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import AllMusic from "../components/Music/AllMusic";
import MusicNav from "../components/Music/MusicNav";
import MusicSideComp from "../components/Music/MusicSideComp";
import styles from "./Music.module.css"

const Music: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <Row>
                    <Col md={2} lg={2} >
                        <MusicSideComp />
                    </Col>
                    <Col md={10} lg={10} >
                        <MusicNav />
                        <AllMusic />
                    </Col>
                </Row>
            </>
        </Layout >
    );
};

export default Music;
