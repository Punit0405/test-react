import { Col, Image, Ratio, Row, Table } from "react-bootstrap";
import styles from "./ClientDocument.module.css";
import { Link, useNavigate, useParams ,NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient"

const ClientDocument: any = () => {
   

    return (
        <>
            <Table className="" size="md" responsive="md">
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../home1.svg`}
                                />
                            </div>
                        </td>
                        <td>
                            <div className={styles.invoicemain}>
                                <div className={styles.invoicename}>Invoice#001</div>
                                <div className={styles.invoiceinner}>
                                    <div className={styles.tableamount}>R0.00</div>
                                    <div className={styles.tabledate}>7 March 2023</div>
                                </div>
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../home1.svg`}
                                />
                            </div>
                        </td>
                        <td>
                            <div className={styles.invoicemain}>
                                <div className={styles.invoicename}>Invoice#001</div>
                                <div className={styles.invoiceinner}>
                                    <div className={styles.tableamount}>R0.00</div>
                                    <div className={styles.tabledate}>7 March 2023</div>
                                </div>
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ClientDocument