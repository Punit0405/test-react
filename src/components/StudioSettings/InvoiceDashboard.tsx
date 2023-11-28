import { useEffect, useState } from "react";
import styles from "./InvoiceDashboard.module.css";
import { useNavigate } from "react-router-dom";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientLoader from "../Loader/StudioClientLoader";
import { Table } from "react-bootstrap";
import InvoiceTable from "./InvoiceTable";
import InvoiceNav from "./InvoiceNav";
import AddNewInvoice from "../Modal/AddNewInvoice";

function InvoiceDashboard() {
    useEffect(() => {
        getInvoiceList();
        getClientList();
    }, []);

    const [modalShow, setModalShow] = useState(false);
    const [invoices, setInvoices]: any = useState();
    const [allInvoices, setAllInvoices]: any = useState();
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const [listLoader, setlistLoader] = useState(true);
    const [client, setClient] = useState([]);

    const getClientList = async (search?: any) => {
        try {
            const clientRes = await StudioClientSevice.getCientList(search);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setClient(clientRes?.result);
                setlistLoader(false);
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

    const getInvoiceList = async () => {
        try {
            const clientRes = await StudioClientSevice.getInvoicesList();
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setInvoices(clientRes?.result?.data?.invoices);
                setAllInvoices(clientRes?.result?.data?.invoices);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
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

    const deleteQuestionnaries = async (id: any) => {
        try {
            const updatedQuestionnaries = invoices.filter(
                (questionnarie: any) => questionnarie.id !== id
            );
            setInvoices(updatedQuestionnaries);
            setAllInvoices(updatedQuestionnaries);
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
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

    const setAllInvoicesList = async (updateInvoice: any) => {
        const updateAllInvoice = allInvoices.map((invoice: any) => {
            if (invoice.id === updateInvoice.id) {
                return updateInvoice;
            }
            return invoice;
        });

        setInvoices(updateAllInvoice);
        setAllInvoices(updateAllInvoice);
    };

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Invoices</div>
                <div className={styles.frameParent}>
                    <button
                        className={styles.addNewDevice}
                        onClick={() => setModalShow(true)}
                        disabled={listLoader}
                    >
                        New Invoice
                    </button>
                </div>
            </div>
            {loader === true ? (
                <StudioClientLoader />
            ) : invoices ? (
                <div>
                    <div className={styles.totalDiv}>
                        <div>
                            <p className={styles.label}>Total Paid</p>
                            <h3>R0.00</h3>
                        </div>
                        <div>
                            <p className={styles.label}>Total Outstanding</p>
                            <h3>R0.00</h3>
                        </div>
                        <div>
                            <p className={styles.label}>Past Due</p>
                            <h3 className={styles.dueColor}>R0.00</h3>
                        </div>
                    </div>
                    <InvoiceNav
                        invoices={allInvoices}
                        setinvoices={setInvoices}
                    />
                    <Table striped className="mt-4" size="md" responsive="md">
                        <thead>
                            <tr className={styles.tableheading}>
                                <td>Invoice Number</td>
                                <td>Amount</td>
                                <td>Client</td>
                                <td>Created</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices &&
                                invoices.length > 0 &&
                                invoices.map((invoice: any, index: any) => (
                                    <InvoiceTable
                                        invoice={invoice}
                                        key={index}
                                        deleteQuestionnaries={
                                            deleteQuestionnaries
                                        }
                                        setAllInvoicesList={setAllInvoicesList}
                                    />
                                ))}
                        </tbody>
                    </Table>
                    {!listLoader && (
                        <AddNewInvoice
                            client={client}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    )}
                </div>
            ) : (
                <div className={styles.noclient}>
                    <div>
                        <h6>No Invoices</h6>
                        <p>
                            When you start transacting with your clients, Your
                            invoice will be listed here.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InvoiceDashboard;
