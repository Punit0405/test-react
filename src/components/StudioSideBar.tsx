import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import styles from "./StudioSideBar.module.css";


const StudioSideBar: FunctionComponent = () => {
    return (
        <div className={styles.maincomponent}>
            <div className={styles.titleedit}>
                <p className={styles.sidemaintitle}>Tebogo Wedding</p>
                <i className="fa-regular fa-pen sidebaricon"></i>
            </div> 
            <div className={styles.datepreview}>
                <p className={styles.datesection}>
                    January 6th, 2023
                </p>
                <p className={styles.previewsection}>
                    Preview
                </p>
            </div>
            <div className={styles.covermain}>
                <div className={styles.coverinside}>
                    <button className={styles.coverbtn}>Change Cover</button>
                </div>
            </div>
            <div className={styles.settingtab}>
                <button className={styles.settingbtn}>
                    <i className="fa-light setcolorsidesettingset fa-gear"></i>
                </button>
            </div>
            <p className={styles.settings}>Settings</p>
            <Nav defaultActiveKey="/home" className="flex-column">
                <button className={styles.navbutton}>
                    <Link to="/setting/collection-setting">
                        <i className="fa-regular setcolorsidesetting fa-ellipsis-vertical"></i>
                        <p className={styles.settingname}> Collection Settings</p>
                    </Link>
                </button>
                <button className={styles.navbutton}>
                    <Link to="/setting/design">
                        <i className="fa-regular setcolorsidesetting fa-pen-to-square"></i>
                        <p className={styles.settingname}> Design</p>
                    </Link>
                </button>
                <button className={styles.navbutton}>
                    <Link to="/setting/privacy">
                        <i className="fa-regular setcolorsidesetting fa-lock-keyhole"></i>
                        <p className={styles.settingname}> Privacy</p>
                    </Link>
                </button>
                <button className={styles.navbutton}>
                    <Link to="/setting/download">
                        <i className="fa-sharp setcolorsidesetting fa-regular fa-arrow-down-to-line"></i>
                        <p className={styles.settingname}> Download</p>
                    </Link>
                </button>
            </Nav>
            <div>
                <p className={styles.datepreview}>
                    <button className={styles.previewbtn}>Preview</button>
                    <button className={styles.publishbtn}>Publish</button>
                </p>
            </div>
        </div>
    );
};

export default StudioSideBar;
