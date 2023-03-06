import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CreateCollectionModal from '../Modal/CreateCollectionModal';
import styles from "./GalleryNav.module.css";

function GalleryNav() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Navbar className={styles.maincomp}>
                <Container fluid>
                    <Navbar.Brand className={styles.mainname}>Collections</Navbar.Brand>
                    <Form className="d-flex">
                        <Button className={styles.collectionbtn} onClick={() => setModalShow(true)} variant="custom">New Collection</Button>
                        <Button className={styles.searchbtn} variant="custom">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </Button>
                        <Button className={styles.searchbtn} variant="custom">
                            <i className="fa-regular fa-arrow-right-arrow-left"></i>
                        </Button>
                    </Form>
                </Container>
                <CreateCollectionModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    createNew={true}
                />
            </Navbar>
        </>
    );
}

export default GalleryNav;