import { FunctionComponent } from "react";
import { useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import CreateCollectionModal from "./Modal/CreateCollectionModal";
import styles from "./StudioSideBar.module.css";


const StudioSideBar: FunctionComponent = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={styles.maincomponent}>
            <div className={styles.titleedit}>
                <p className={styles.sidemaintitle}>Tebogo Wedding</p>
                <i className="fa-regular fa-pen sidebaricon" onClick={() => setModalShow(true)}></i>
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
                <div className={styles.coverinside1}>
                    <Ratio aspectRatio='16x9'>
                        <div>
                            <Image className={styles.myimage} src="../../sample2.jpg" alt="../../imagegrey.jpg" />
                            <div className={styles.textimage}>Change Cover</div>
                        </div>
                    </Ratio>
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
            <CreateCollectionModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                createNew={false}
            />
        </div>
    );
};

export default StudioSideBar;
