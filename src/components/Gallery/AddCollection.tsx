import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLayoutWithSideBar from "../NavLayoutWithSideBar";
import styles from "./AddCollection.module.css";
import AddPhotosNav from "./AddPhotosNav";

const AddCollection: FunctionComponent = () => {
    return (
        <Container fluid className={styles.outermain}>
            <NavLayoutWithSideBar>
                <>
                    <AddPhotosNav />
                    <div className={styles.addmedia}>
                        <p className={styles.nomedia}>
                            You have no media here
                        </p>
                        <Link to="/gallery/addcollection">
                            <Button className={styles.dragbtn} variant="custom">Add Media</Button>
                        </Link>
                    </div>
                    {/* <DragMedia /> */}
                    {/* <UploadView /> */}
                </>
            </NavLayoutWithSideBar>
        </Container>
    );
};

export default AddCollection;
