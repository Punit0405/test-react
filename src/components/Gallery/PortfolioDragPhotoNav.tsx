import { FunctionComponent } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import styles from "./AddPhotosNav.module.css";


const PortfolioDragPhotoNav: FunctionComponent = () => {
    const { portfolioId } = useParams()
    return (
        <Navbar className={styles.maincomp}>
            <Container fluid>
                <Navbar.Brand className={styles.mainname}>Add Photos to portfolio</Navbar.Brand>
                <Form className="d-flex">
                    <Link to={`/portfolio/${portfolioId}`}>
                        <Button className={styles.collectionbtn} variant="custom">Cancel</Button>
                    </Link>
                </Form>
            </Container>
        </Navbar>
    );
};

export default PortfolioDragPhotoNav;
