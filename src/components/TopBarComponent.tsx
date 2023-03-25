import { FunctionComponent } from "react";
import { Container, Image, Nav, Navbar, NavDropdown, Ratio } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./TopBarComponent.module.css";

const TopBarComponent: FunctionComponent = () => {
    const navigate = useNavigate();
    const logoutFunction = ()=>{
        localStorage.removeItem("accessToken");
        navigate("/");

    }
    return (
        <Navbar className={styles.topbar}  id="headerTopbar">
            <div className={styles.artboard134x81Parent} id="innerHeader">
                <Image fluid
                    className={styles.artboard134x81}
                    alt=""
                    src="../../snape_logo@2x.png"
                />
                <div className={styles.frameParent}>
                    <Ratio aspectRatio='1x1' className={styles.navimg}>
                        <Image fluid
                            className={styles.maskGroupIcon1}
                            alt=""
                            src="../../profile_image@2x.png"
                        />
                    </Ratio>
                        <NavDropdown
                        title="My Name" className={styles.navdropdown} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logoutFunction()}>
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </Navbar >

    );
};

export default TopBarComponent;
