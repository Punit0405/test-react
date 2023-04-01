import { width } from "@mui/system";
import { FunctionComponent } from "react";
import { Button, Col, Container, Dropdown, Form, FormLabel, Image, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import CustomDropdownItem from "./CustomDropdownItem";

import styles from "./Design.module.css"

const DisplayCover: FunctionComponent = () => {
    return (
        <>
            <div className={styles.sample}>
                <div
                    className={styles.pcscreen}
                    style={{
                        backgroundImage: `url("../../images11.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div>
                        <p className={styles.maintitle}>Test Collection</p>
                        <p className={styles.maindate}>March 9th, 2023</p>
                    </div>
                </div>
                <div
                    className={styles.mobilescreen}
                    style={{
                        backgroundImage: `url("../../images11.jpg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className={styles.mobiletitlediv}>
                        <p className={styles.maintitlemobile}>Test Collection</p>
                        <p className={styles.maindatemobile}>March 9th, 2023</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DisplayCover;
