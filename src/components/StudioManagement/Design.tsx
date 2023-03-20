import { FunctionComponent } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
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
                                    <Form.Select name="status" className={styles.fontstyle}>
                                        <option value="PUBLISHED" >Sans</option>
                                        <option value="HIDDEN" >Serif</option>
                                        <option value="PUBLISHED" >Modern</option>
                                        <option value="HIDDEN" >Timeless</option>
                                        <option value="PUBLISHED" >Bold</option>
                                        <option value="HIDDEN" >Subtitle</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className={styles.fontmain}>
                                <Form.Label className={styles.formlabel}>Color</Form.Label>
                                <div className={styles.titlediv}>
                                    <Form.Label className={styles.covertitle}>Cover Title</Form.Label>
                                    <Form.Label className={styles.coverdate}>January 6th, 2023</Form.Label>
                                    <Form.Select name="status" className={styles.fontstyle}>
                                        <option value="PUBLISHED" >Light</option>
                                        <option value="HIDDEN" >Gold</option>
                                        <option value="PUBLISHED" >Rose</option>
                                        <option value="HIDDEN" >Terracotta</option>
                                        <option value="PUBLISHED" >Sand</option>
                                        <option value="HIDDEN" >Olive</option>
                                        <option value="HIDDEN" >Agave</option>
                                        <option value="PUBLISHED" >Sea</option>
                                        <option value="HIDDEN" >Dark</option>
                                    </Form.Select>
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
                        </Col>
                    </Row>

                </Form>
            </div>
        </>
    );
};

export default Design;
