import React, { useState } from "react";
import styles from "./QuestionnairesList.module.css";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, Image, Ratio, Table } from "react-bootstrap";
import Moment from "react-moment";
import DeleteConfirmation from "../Modal/DeleteConfirmation";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import RecordInvoiceModal from "../Modal/RecordInvoiceModal";
import RecordQuotationModal from "../Modal/RecordQuotationModal";

function QuotationTable({
    invoice,
    deleteQuestionnaries,
    setAllInvoicesList,
}: any) {
    const navigate = useNavigate();
    const [modalDelete, setDeleteShow] = useState(false);
    const [modalRecord, setRecordShow] = useState(false);

    const deleteFiles = async () => {
        try {
            const clientRes = await StudioClientSevice.deleteQuotation(
                invoice?.id
            );
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                deleteQuestionnaries(invoice?.id);
                setDeleteShow(false);
                NotificationWithIcon(
                    "success",
                    "Quotation deleted successfully."
                );
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    return (
        <tr className={styles.tableRow}>
            <td
                className={styles.tableData}
                onClick={() => {
                    navigate(String(invoice.id));
                }}
            >
                <div className={styles.tableDiv}>{invoice?.id}</div>
            </td>
            <td
                className={styles.tableData}
                onClick={() => {
                    navigate(String(invoice.id));
                }}
            >
                <div className={styles.tableDiv}>
                    {invoice.currency} {invoice.totalAmount}
                </div>
            </td>
            <td
                className={styles.tableData}
                onClick={() => {
                    navigate(String(invoice.id));
                }}
            >
                <div className={styles.nameDiv}>
                    <Image
                        className={styles.imgStyle}
                        alt="customer img"
                        src={invoice?.clientId?.profileUrl}
                    />
                    {invoice?.clientId?.name}
                </div>
            </td>
            <td
                className={styles.tableData}
                onClick={() => {
                    navigate(String(invoice.id));
                }}
            >
                <div className={styles.tableDiv}>
                    <Moment format="MMMM  Do, YYYY">{invoice.createdAt}</Moment>
                </div>
            </td>
            <td className={styles.tableData}>
                <div className={styles.tableDiv}>
                    <DropdownButton
                        id="dropdown-basic-button"
                        className={styles.sortbtn}
                        align="end"
                        variant="custom"
                        title={
                            <i className="fa-regular fa-ellipsis setinvoice"></i>
                        }
                    >
                        <Dropdown.Item
                            className={styles.navmain}
                            onClick={() => setRecordShow(true)}
                        >
                            Record Quotation
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            className={styles.dropitem}
                            onClick={() => setDeleteShow(true)}
                        >
                            Delete Quotation
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
            </td>
            <DeleteConfirmation
                show={modalDelete}
                handledeletefiles={deleteFiles as any}
                modaltext={"Are you sure you want to delete quotation ?"}
                onHide={() => setDeleteShow(false)}
            />
            <RecordQuotationModal
                show={modalRecord}
                status={invoice?.status}
                id={invoice?.id}
                setAllInvoicesList={setAllInvoicesList}
                onHide={() => setRecordShow(false)}
            />
        </tr>
    );
}

export default QuotationTable;
