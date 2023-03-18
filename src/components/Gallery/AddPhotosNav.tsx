import { FunctionComponent } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styles from "./AddPhotosNav.module.css";


const AddPhotosNav: FunctionComponent = () => {
    const { collectionId } = useParams()
    return (
        <Navbar className={styles.maincomp}>
            <Container fluid>
                <Navbar.Brand className={styles.mainname}>Gallery</Navbar.Brand>
                <Form className="d-flex">
                    <Link to={`/gallery/addcollection/${collectionId}`}>
                        <Button className={styles.collectionbtn} variant="custom">Add Photos</Button>
                    </Link>
                    <Button className={styles.collectionbtn} variant="custom">Add Videos</Button>
                </Form>
            </Container>
        </Navbar>
    );
};

export default AddPhotosNav;
