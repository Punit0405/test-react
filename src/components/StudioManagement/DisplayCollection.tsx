import { width } from "@mui/system";
import { FunctionComponent } from "react";
import { Button, Col, Container, Dropdown, Form, FormLabel, Image, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import Grid from "../Grid";
import CustomDropdownItem from "./CustomDropdownItem";

import styles from "./Design.module.css"
import DesignCollectionNav from "./DesignCollectionNav";
import DesignCollectionNavMobile from "./DesignCollectionNavMobile";

const DisplayCollection: FunctionComponent = () => {
    return (
        <>
            <div className={styles.sample}>
                <div
                    className={styles.pcscreen}
                    style={{
                        backgroundColor: "black"
                    }}
                >
                    <DesignCollectionNav />
                    <Grid />
                </div>
                <div
                    className={styles.mobilescreen}
                    style={{
                        backgroundColor: "black"
                    }}
                >
                    <div className={styles.mobiletitlediv}>
                        <DesignCollectionNavMobile />
                        <Grid />
                    </div>
                </div>

            </div>
        </>
    );
};

export default DisplayCollection;
