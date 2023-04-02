import { width } from "@mui/system";
import { FunctionComponent } from "react";
import { Button, Col, Container, Dropdown, Form, FormLabel, Image, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import CustomDropdownItem from "./CustomDropdownItem";
import { useSelector, useDispatch } from 'react-redux'
import styles from "./Design.module.css"

const DisplayCover: FunctionComponent = () => {

    const myState = useSelector((state: any) => state.changeDesign)

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
                        <p
                            className={styles.maintitle}
                            style={myState.coverstyle}
                        >
                            Test Collection 
                        </p>
                        <p
                            className={styles.maindate}
                            style={myState.coverstyle}
                        >
                            March 9th, 2023
                        </p>
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
                        <p
                            className={styles.maintitlemobile}
                            style={myState.coverstyle}
                        >
                            Test Collection
                        </p>
                        <p
                            className={styles.maindatemobile}
                            style={myState.coverstyle}
                        >
                            March 9th, 2023
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DisplayCover;
