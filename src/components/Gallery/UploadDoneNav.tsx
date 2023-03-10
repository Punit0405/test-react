import { FunctionComponent } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudioSideBar from "../StudioSideBar";
import styles from "./UploadNavDone.module.css";


const UploadDoneNav: FunctionComponent = () => {
    return (
        <Navbar className={styles.maincomp}>
            <Container fluid>
                <Navbar.Brand className={styles.mainname}>Add Photos to Highlights</Navbar.Brand>
                <Form className={styles.btnsetting}>
                    <Link to="/gallery/newcollection" className={styles.widthset}>
                        <Button className={styles.collectionbtn} variant="custom">Upload More</Button>
                    </Link>
                    <Button className={styles.collectionbtn} variant="custom">Manage Collection</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default UploadDoneNav;
