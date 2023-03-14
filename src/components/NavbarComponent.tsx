import { useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavbarComponent.module.css"
import Constants from "../Config/Constants"

interface Props {
    activeTab:string;
}



const NavBarComponent  = () => {
    return (
        <Nav id="navbar" variant="tabs" defaultActiveKey="link-1"   className={styles.navpadding}>
            {/* <Container> */}
            
            <Nav.Link  as={NavLink} to="/dashboard"  eventKey="link-1">
                    <div className={styles.home} >
                        <i className="fa-regular fa-house setcolor"></i>
                        <p>Home</p>
                    </div>
            </Nav.Link>
            
       
            
            <Nav.Link  as={NavLink} to="/studiomanagement"  eventKey="link-2">
                    <div className={styles.home}>
                        <i className="fa-regular fa-video setcolor"></i>
                        <p>Studio Management</p>
                    </div>
            </Nav.Link>
            

           
            <Nav.Link as={NavLink}  to="/gallery" eventKey="link-3" >
                    <div className={styles.home}>
                        <i className="fa-regular setcolor fa-grid-2"></i>
                        <p>Gallery</p>
                    </div>
            </Nav.Link>
           

            
            <Nav.Link eventKey="link-4" as={NavLink} to="/asset-registry" >
                    <div className={styles.home}>
                        <i className="fa-regular fa-folder setcolor"></i>
                        <p>Asset Registry</p>
                    </div>
            </Nav.Link>
          

            
            <Nav.Link eventKey="link-5" as={NavLink} to="/music">
                    <div className={styles.home}>
                        <i className="fa-regular fa-circle-play setcolor"></i>
                        <p >Music</p>
                    </div>
            </Nav.Link>
           
            {/* </Container> */}
        </Nav>

    );
};

export default NavBarComponent;