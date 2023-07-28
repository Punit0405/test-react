import { FunctionComponent } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UploadNavDone.module.css";
import { useParams, redirect } from "react-router-dom";

const UploadDoneNavPortfolio = (props: any) => {

    const { portfolioId } = useParams()

    const handleClick = () => {
        props.handleSetChange()
    }

    return (
        <Navbar className={styles.maincomp}>
            <Container fluid className={styles.galleryaddnav}>
                <Navbar.Brand className={styles.mainname}>Add Photos Portfolio</Navbar.Brand>
                <Form className={styles.btnsetting}>
                    <div className={styles.widthset} onClick={handleClick}>
                        <Button className={styles.collectionbtn} variant="custom">Upload More</Button>
                    </div>
                    <Link to={`/portfolio/${portfolioId}`}>
                        <Button className={styles.collectionbtn} variant="custom">Manage Portfolio</Button>
                    </Link>
                </Form>
            </Container>
        </Navbar>
    );
};

export default UploadDoneNavPortfolio;
