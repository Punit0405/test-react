import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "./NavbarComponent";
import TopBarComponent from "./TopBarComponent";
import StudioSideBar from "./StudioSideBar";
import styles from "./Layout.module.css"

interface Props {
    children: JSX.Element;
}

const LayoutWithSideBar = ({ children }: Props) => {
    return (
        <div className={styles.maincomp}>
            <Container fluid >
                <Row>
                    <Col lg={2} md={3} sm={3}>
                        <StudioSideBar />
                    </Col>
                    <Col lg={10} md={9} sm={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LayoutWithSideBar;
