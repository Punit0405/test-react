import { FunctionComponent } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "./NavbarComponent";
import TopBarComponent from "./TopBarComponent";
import styles from "./Layout.module.css"

interface Props {
    children: JSX.Element;
}

const Grid = () => {
    return (
        <div className={styles.maincomp}>
            <Container fluid>
                <Row>
                    <Col lg={3} md={4} sm={6} className={styles.imageset}>
                        <Image className={styles.singleimage} fluid src="../../sample2.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images11.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images12.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images13.jpg" />
                    </Col>
                    <Col lg={3} md={4} sm={6} className={styles.imageset}>
                        <Image className={styles.singleimage} fluid src="../../images13.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images14.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images15.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images16.jpg" />
                    </Col>
                    <Col lg={3} md={4} sm={6} className={styles.imageset}>
                        <Image className={styles.singleimage} fluid src="../../images11.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images15.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images14.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images16.jpg" />
                    </Col>
                    <Col lg={3} md={4} sm={6} className={styles.imageset}>
                        <Image className={styles.singleimage} fluid src="../../images16.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images14.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images15.jpg" />
                        <Image className={styles.singleimage} fluid src="../../images12.jpg" />
                    </Col>
                </Row>
            </Container>

            <hr />
            <hr />
            <hr />
            <hr />
            <h1>Punit's Grid</h1>

            <div className={styles.gridClassPunit}>
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../sample2.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images11.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images16.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid   src="../../images16.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../sample2.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images11.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images16.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid   src="../../images16.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../sample2.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images11.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images16.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images12.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images13.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images14.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid  src="../../images15.jpg" />
            <Image className={styles.singleimagePunit} fluid   src="../../images16.jpg" />
            </div>

        </div>
    );
};

export default Grid;
