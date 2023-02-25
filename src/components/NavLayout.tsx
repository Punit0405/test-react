import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";

interface Props {
    children: JSX.Element;
}

const NavLayout = ({ children }: Props) => {
    return (
        <Container fluid >
            <TopBarComponent />
            <NavBarComponent />
            {children}
        </Container>
    );
};

export default NavLayout;
