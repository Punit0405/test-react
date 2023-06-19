import { Col, Image, Ratio, Row, Table } from "react-bootstrap";
import styles from "./ClientDocument.module.css";

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
                                <div>Invoice#001</div>
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
                                <div>Invoice#001</div>
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