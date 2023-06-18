import { Table } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";

const DashboardRecentDoc: any = () => {
    return (
        <>
            <Table striped className="mt-4" size="lg" responsive="md">
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>Invoice#001</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>Cameron green</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>Invoice#002</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>Virat Kohli</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default DashboardRecentDoc