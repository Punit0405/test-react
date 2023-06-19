import { Image, Ratio, Table } from "react-bootstrap"
import styles from './ClientList.module.css'

const ClientList: any = () => {

    return (
        <div>
            <Table striped className="mt-4" size="md" responsive="md">
                <thead>
                    <tr className={styles.tableheading}>
                        <td>Client Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Created</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../sample2.jpg`}
                                />
                                Sample Client
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>sample@gmail.com</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>0000 0000</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../special2.png`}
                                />
                                Sample Client
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>sample@gmail.com</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>0000 0000</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default ClientList