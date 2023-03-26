import { width } from "@mui/system";
import { FunctionComponent } from "react";
import { Button, Col, Container, Dropdown, Form, FormLabel, Image, InputGroup, Nav, Navbar, Row } from "react-bootstrap";
import CustomDropdownItem from "./CustomDropdownItem";

import styles from "./Design.module.css"

const Design: FunctionComponent = () => {
    return (
        <>
            <div className={styles.maincomponent}>
                <Form>
                    <Form.Label className={styles.sidemaintitle}>Design Settings</Form.Label>
                    <Row>
                        <Col lg={4} md={4} sm={4} className={styles.selection}>
                            <div className={styles.fontmain}>
                                <Form.Label className={styles.formlabel}>Typography</Form.Label>
                                <div className={styles.titlediv}>
                                    <Form.Label className={styles.covertitle}>Cover Title</Form.Label>
                                    <Form.Label className={styles.coverdate}>January 6th, 2023</Form.Label>
                                    <Dropdown className={styles.dropdownselect}>
                                        <Dropdown.Toggle variant="none" style={{ width: "100%" }} size="lg" id="dropdown-basic">
                                            <div className={styles.customDropdown}>
                                                <span className={styles.dropdownname}>Serif</span>
                                                <i className="fa-sharp fa-regular fa-angle-down"></i>
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ width: "100%" }}>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src={"../../../sans.svg"} />
                                                    </div>
                                                    <div>Sans</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src="../../../sans.svg" />
                                                    </div>
                                                    <div>Serif</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src="../../../sans.svg" />
                                                    </div>
                                                    <div>Modern</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src="../../../sans.svg" />
                                                    </div>
                                                    <div>Timeless</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src="../../../sans.svg" />
                                                    </div>
                                                    <div>Bold</div>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">
                                                <div className={styles.fontstylemain}>
                                                    <div className={styles.fontsvg}>
                                                        <Image src="../../../sans.svg" />
                                                    </div>
                                                    <div>Subtle</div>
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className={styles.fontmain}>
                                <Form.Label className={styles.formlabel}>Color</Form.Label>
                                <div className={styles.titlediv}>
                                    <div className={styles.colorblock}>
                                        <div className={styles.colorstyle}>
                                            <svg height="40" width="40">
                                                <circle cx="20" cy="20" r="15" stroke="#D9D9D9" stroke-width="1" fill="#FFFFFF" />
                                            </svg>
                                            <p className={styles.styletype}>Background</p>
                                        </div>
                                        <div className={styles.colorstyle}>
                                            <svg height="40" width="40">
                                                <circle cx="20" cy="20" r="15" stroke="#D9D9D9" stroke-width="1" fill="#F5F5F5" />
                                            </svg>
                                            <p className={styles.styletype}>Accent</p>
                                        </div>
                                        <div className={styles.colorstyle}>
                                            <svg height="40" width="40">
                                                <circle cx="20" cy="20" r="15" stroke="#D9D9D9" stroke-width="1" fill="#333333" />
                                            </svg>
                                            <p className={styles.styletype}>Button</p>
                                        </div>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="none" style={{ width: "100%" }} size="lg" id="dropdown-basic">
                                            <div className={styles.customDropdown}>
                                                <span className={styles.dropdownname}>Light</span>
                                                <i className="fa-sharp fa-regular fa-angle-down"></i>
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ width: "100%" }}>
                                            <Dropdown.Item href="#/action-1" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#FFFFFF" color2="#F5F5F5" color3="#333333" theme="Light" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#FFFEFA" color2="#FCF8F2" color3="#9E8962" theme="Gold" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#FBF8F7" color2="#F8F3F2" color3="#9E7977" theme="Rose" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#FBF7F4" color2="#F3ECE7" color3="#9E765D" theme="Terracotta" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#F5F2F0" color2="#E9E4E2" color3="#9E8B7D" theme="Sand" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#F6F6F3" color2="#EDECE8" color3="#9D9E7E" theme="Olive" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#F5F6F5" color2="#EDF0ED" color3="#869E94" theme="Agave" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}>
                                                <CustomDropdownItem color1="#FAFAFA" color2="#EAECEE" color3="#93939F" theme="Sea" />
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className={styles.colordropmain}   >
                                                <CustomDropdownItem color1="#1E1E1E" color2="#282828" color3="#4D4D4D" theme="Dark" />
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className={styles.fontmain}>
                                <Form.Label className={styles.formlabel}>Grid Style</Form.Label>
                                <div className={styles.gridstylediv}>
                                    <div className={styles.gridstyleinnerdiv}>
                                        <div className={styles.gridinnersetting}>
                                            <i className="fa-sharp fa-solid fa-objects-column gridicon"></i>
                                        </div>
                                        <p className={styles.stylenames}>Vertical</p>
                                    </div>
                                    <div className={styles.gridstyleinnerdiv}>
                                        <div className={styles.gridinnersetting}>
                                            <i className="fa-sharp fa-solid fa-objects-column fa-rotate-270 gridicon"></i>
                                        </div>
                                        <p className={styles.stylenames}>Horizontal</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fontmain}>
                                <Form.Label className={styles.formlabel}>Grid Spacing</Form.Label>
                                <div className={styles.gridstylediv}>
                                    <div className={styles.gridstyleinnerdiv}>
                                        <div className={styles.gridinnersetting}>
                                            <i className="fa-sharp fa-solid fa-grid-2 gridicon"></i>
                                        </div>
                                        <p className={styles.stylenames}>Regular</p>
                                    </div>
                                    <div className={styles.gridstyleinnerdiv}>
                                        <div className={styles.gridinnersetting}>
                                            <i className="fa-sharp fa-solid fa-objects-column fa-rotate-270 gridicon"></i>
                                        </div>
                                        <p className={styles.stylenames}>Large</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={8} className={styles.viewpoint}>
                            <div className={styles.sidemain}>
                                <Navbar className={styles.sidenav} variant="light">
                                    <Container>
                                        <Nav className="me-auto">
                                            <Nav.Link className={styles.navname} href="#home">Cover</Nav.Link>
                                            <Nav.Link className={styles.navname} href="#pricing">Collection</Nav.Link>
                                        </Nav>
                                        <Nav className="">
                                            <Nav.Link className={styles.navname} href="#home"><i className="fa-regular fa-image sidescreennav"></i>Cover</Nav.Link>
                                            <Nav.Link className={styles.navname} href="#pricing"><i className="fa-solid fa-circle-dot sidescreennav"></i>Focal Point</Nav.Link>
                                        </Nav>
                                    </Container>
                                </Navbar>
                                <div className={styles.sample}>
                                    <div
                                        className={styles.pcscreen}
                                        style={{
                                            backgroundImage: `url("../../images11.jpg")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}
                                    >
                                        <div>
                                            <p className={styles.maintitle}>Test Collection</p>
                                            <p className={styles.maindate}>March 9th, 2023</p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.mobilescreen}
                                        style={{
                                            backgroundImage: `url("../../images11.jpg")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}
                                    >
                                        <div>
                                            <p className={styles.maintitlemobile}>Test Collection</p>
                                            <p className={styles.maindatemobile}>March 9th, 2023</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </Col>
                    </Row>

                </Form>
            </div>
        </>
    );
};

export default Design;
