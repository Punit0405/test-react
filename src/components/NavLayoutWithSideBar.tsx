import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "../components/NavbarComponent";
import TopBarComponent from "../components/TopBarComponent";
import StudioSideBar from "./StudioSideBar";

interface Props {
    children: JSX.Element;
}

const NavLayoutWithSideBar = ({ children }: Props) => {
    return (
        <Container fluid >
            <TopBarComponent />
            <NavBarComponent />
            <Row>
                <Col xl={3} lg={3} sm={3}>
                    <StudioSideBar />
                </Col>
                <Col xl={9} lg={9} sm={9}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default NavLayoutWithSideBar;
