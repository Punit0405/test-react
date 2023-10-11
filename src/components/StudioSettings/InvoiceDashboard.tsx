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
    }, []);

    const [modalShow, setModalShow] = useState(false);
    const [invoices, setInvoices]: any = useState([
        {
            id: "1",
            amount: "500",
            profileUrl: "../../../special.png",
            name: "test client",
            createdAt: "2020-01-01 15:10:10 ",
        },
        {
            id: "2",
            amount: "1500",
            profileUrl: "../../../special.png",
            name: "my client",
            createdAt: "2020-01-01 15:10:10 ",
        },
        {
            id: "3",
            amount: "1000",
            profileUrl: "../../../special2.png",
            name: "client 12",
            createdAt: "2020-01-01 15:10:10 ",
        },
        {
            id: "3",
            amount: "500",
            profileUrl: "../../../special.png",
            name: "test client",
            createdAt: "2020-01-01 15:10:10 ",
        },
    ]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const getInvoiceList = async () => {
        try {
            const clientRes = await StudioClientSevice.getQuestionnariesList();
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setInvoices(clientRes?.result?.data?.questionnarires);
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

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Invoices</div>
                <div className={styles.frameParent}>
                    <button
                        className={styles.addNewDevice}
                        onClick={() => setModalShow(true)}
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
                    <InvoiceNav />
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
                                invoices.length &&
                                invoices.map((invoice: any, index: any) => (
                                    <InvoiceTable
                                        invoice={invoice}
                                        key={index}
                                        deleteQuestionnaries={
                                            deleteQuestionnaries
                                        }
                                    />
                                ))}
                        </tbody>
                    </Table>
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
            <AddNewInvoice
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default InvoiceDashboard;
