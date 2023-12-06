import { Table } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import Moment from "react-moment";

const DashboardRecentDoc: any = ({ document }: any) => {
    return (
        <div className={styles.dashboardTable}>
            <Table striped className="mt-4" size="lg" responsive>
                <tbody>
                    {document?.length ? (
                        document.map((doc: any) => (
                            <tr className={styles.tableRow}>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        {doc?.source}#{doc?.id}
                                    </div>
                                </td>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        {doc?.name}
                                    </div>
                                </td>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        <Moment format="MMMM  Do, YYYY">
                                            {doc.createdAt}
                                        </Moment>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center">
                            No Recent Documents Found
                        </div>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default DashboardRecentDoc;
