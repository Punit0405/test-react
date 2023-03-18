import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavbarComponent.module.css"
import { useLocation } from 'react-router-dom';

const NavBarComponent = () => {

    const location = useLocation()
    const currentRoute = location.pathname.split('/')[1] as string

    return (
        <Nav id="navbar" variant="tabs" defaultActiveKey={currentRoute} className={styles.navpadding}>

            <Nav.Link as={NavLink} to="/dashboard" eventKey="dashboard">
                <div className={styles.home} >
                    <i className="fa-regular fa-house setcolor"></i>
                    <p>Home</p>
                </div>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/studiomanagement" eventKey="studiomanagement">
                <div className={styles.home}>
                    <i className="fa-regular fa-video setcolor"></i>
                    <p>Studio Management</p>
                </div>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/gallery" eventKey="gallery" >
                <div className={styles.home}>
                    <i className="fa-regular setcolor fa-grid-2"></i>
                    <p>Gallery</p>
                </div>
            </Nav.Link>

            <Nav.Link eventKey="asset-registry" as={NavLink} to="/asset-registry" >
                <div className={styles.home}>
                    <i className="fa-regular fa-folder setcolor"></i>
                    <p>Asset Registry</p>
                </div>
            </Nav.Link>

            <Nav.Link eventKey="music" as={NavLink} to="/music">
                <div className={styles.home}>
                    <i className="fa-regular fa-circle-play setcolor"></i>
                    <p >Music</p>
                </div>
            </Nav.Link>

        </Nav>

    );
};

export default NavBarComponent;