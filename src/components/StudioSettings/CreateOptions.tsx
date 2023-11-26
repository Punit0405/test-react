import { Col, Row } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import { Link } from "react-router-dom";
import AddNewInvoice from "../Modal/AddNewInvoice";
import { useState } from "react";
import AddQuestionnaires from "../Modal/AddQuestionnaires";

const CreateOptions: any = () => {
    const [modalInvoiceShow, setInvoiceModalShow] = useState(false);
    const [modalQueShow, setQueModalShow] = useState(false);

    return (
        <>
            <Row className={styles.creatediv}>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setInvoiceModalShow(true)}
                    >
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Invoice</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setInvoiceModalShow(true)}
                    >
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Quotation</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button className={styles.buystoragebtn}>
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Contract</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setQueModalShow(true)}
                    >
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Questionnaire</span>
                    </button>
                </Col>
            </Row>
            {/* <AddNewInvoice
                show={modalInvoiceShow}
                onHide={() => setInvoiceModalShow(false)}
            /> */}
            {/* <AddQuestionnaires
                show={modalQueShow}
                onHide={() => setQueModalShow(false)}
            /> */}
        </>
    );
};

export default CreateOptions;
