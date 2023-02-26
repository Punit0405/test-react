import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import styles from "./NavLayout.module.css"

interface Props {
    children: JSX.Element;
    activeTab:string;
}

const NavLayout = ({ children , activeTab }: Props) => {
    return (
        <div className={styles.maincomp}>
            <Container fluid>
                <TopBarComponent />
                <NavBarComponent />
                {children}
            </Container>
        </div>
    );
};

export default NavLayout;
