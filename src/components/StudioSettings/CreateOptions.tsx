import { Col, Row, Spinner } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import AddNewInvoice from "../Modal/AddNewInvoice";
import { useEffect, useState } from "react";
import AddQuestionnaires from "../Modal/AddQuestionnaires";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import AddNewQuotation from "../Modal/AddNewQuotation";

const CreateOptions: any = () => {
    const [modalInvoiceShow, setInvoiceModalShow] = useState(false);
    const [modalQuotationShow, setQuotationModalShow] = useState(false);
    const [modalQueShow, setQueModalShow] = useState(false);
    const [client, setClient] = useState([]);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const getClientList = async (search?: any) => {
        try {
            const clientRes = await StudioClientSevice.getCientList(search);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setClient(clientRes?.result);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    useEffect(() => {
        getClientList();
    }, []);

    return (
        <>
            <Row className={styles.creatediv}>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setInvoiceModalShow(true)}
                        disabled={loader}
                    >
                        {loader ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="setcolorwithoutmargin ms-4"
                            />
                        ) : (
                            <i
                                className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                            ></i>
                        )}
                        <span className={styles.btnname}>Invoice</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setQuotationModalShow(true)}
                        disabled={loader}
                    >
                        {loader ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="setcolorwithoutmargin ms-4"
                            />
                        ) : (
                            <i
                                className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                            ></i>
                        )}
                        <span className={styles.btnname}>Quotation</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setQueModalShow(true)}
                        disabled={loader}
                    >
                        {loader ? (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="setcolorwithoutmargin ms-4"
                            />
                        ) : (
                            <i
                                className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                            ></i>
                        )}
                        <span className={styles.btnname}>Questionnaire</span>
                    </button>
                </Col>
            </Row>
            {!loader && (
                <>
                    <AddNewInvoice
                        show={modalInvoiceShow}
                        client={client}
                        onHide={() => setInvoiceModalShow(false)}
                    />
                    <AddQuestionnaires
                        show={modalQueShow}
                        client={client}
                        onHide={() => setQueModalShow(false)}
                    />
                    <AddNewQuotation
                        client={client}
                        show={modalQuotationShow}
                        onHide={() => setQuotationModalShow(false)}
                    />
                </>
            )}
        </>
    );
};

export default CreateOptions;
