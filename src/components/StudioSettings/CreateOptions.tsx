import { Col, Row } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import AddNewInvoice from "../Modal/AddNewInvoice";
import { useEffect, useState } from "react";
import AddQuestionnaires from "../Modal/AddQuestionnaires";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

const CreateOptions: any = () => {
    const [modalInvoiceShow, setInvoiceModalShow] = useState(false);
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
                        disabled={loader}
                    >
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Quotation</span>
                    </button>
                </Col>
                <Col xl={3} lg={3} md={6} sm={12}>
                    <button
                        className={styles.buystoragebtn}
                        onClick={() => setQueModalShow(true)}
                        disabled={loader}
                    >
                        <i
                            className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}
                        ></i>
                        <span className={styles.btnname}>Questionnaire</span>
                    </button>
                </Col>
            </Row>
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
        </>
    );
};

export default CreateOptions;
