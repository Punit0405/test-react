import { useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavbarComponent.module.css"
import Constants from "../Config/Constants"

interface Props {
    activeTab:string;
}



const NavBarComponent  = () => {
    // const getActiveClass = (checkValue:string)=>{
    //    return activeTab === checkValue ? Constants.active : ""
    // }
    console.log("Navbar Render")
    return (
        <Nav id="navbar" variant="tabs" defaultActiveKey="link-1"   className={styles.navpadding}>
            {/* <Container> */}
            <Nav.Link eventKey="link-1">
                <Link to="/">
                    <div className={styles.home} >
                        <i className="fa-regular fa-house setcolor"></i>
                        <p>Home</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-2">
                <Link to="/studiomanagement">
                    <div className={styles.home}>
                        <i className="fa-regular fa-video setcolor"></i>
                        <p>Studio Management</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-3" >
                <Link to="/gallery">
                    <div className={styles.home}>
                        <i className="fa-regular setcolor fa-grid-2"></i>
                        <p>Gallery</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-4">
                <Link to="/asset-registry">
                    <div className={styles.home}>
                        <i className="fa-regular fa-folder setcolor"></i>
                        <p>Asset Registry</p>
                    </div>
                </Link>
            </Nav.Link>

            <Nav.Link eventKey="link-5">
                <Link to="/music">
                    <div className={styles.home}>
                        <i className="fa-regular fa-circle-play setcolor"></i>
                        <p >Music</p>
                    </div>
                </Link>
            </Nav.Link>
            {/* </Container> */}
        </Nav>

    );
};

export default NavBarComponent;