import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Constants from "../../Config/Constants";
import LayoutWithSideBar from "../LayoutWithSideBar";
import styles from "./AddCollection.module.css";
import AddPhotosNav from "./AddPhotosNav";

const AddCollection: FunctionComponent = () => {
    return (
        <LayoutWithSideBar>
            <>
                <div className={styles.outermain}>
                    <AddPhotosNav />
                    <div className={styles.addmedia}>
                        <p className={styles.nomedia}>
                            You have no media here
                        </p>
                        <Link to="/gallery/addcollection">
                            <Button className={styles.dragbtn} variant="custom">Add Media</Button>
                        </Link>
                    </div>
                </div>
            </>
        </LayoutWithSideBar>
    );
};

export default AddCollection;
