import { Col, Image, Row, Table } from 'react-bootstrap';
import styles from './Client.module.css'
import DashboardUpcoming from './DashboardUpcoming';
import ClientDocument from './ClientDocument';

const Client: any = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.dashboard}>Clients</div>
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
                                    src={`../../../special.png`}
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
            <Row className={styles.clientpayment}>
                <Col xl={8} lg={8}>
                    <h6 className={styles.titlemain}>Payments</h6>
                    <div className={styles.upcomingmain}>
                        <h6 className={styles.datetitle}>Total Received</h6>
                        <h6 className={styles.amount}>R0.00</h6>
                    </div>
                    <h6 className={styles.titlemain}>Documents</h6>
                    <div className={styles.upcomingmain1}>
                        <ClientDocument />
                    </div>
                </Col>
                <Col xl={4} lg={4}>
                    <h6 className={styles.titlemain}>Upcoming Sessions</h6>
                    <DashboardUpcoming />
                </Col>
            </Row>

        </div>
    )
}

export default Client;