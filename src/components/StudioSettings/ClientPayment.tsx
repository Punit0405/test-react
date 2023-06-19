import { Col, Image, Ratio, Row } from "react-bootstrap";
import styles from "./ClientPayment.module.css";

const ClientPayment: any = () => {
    return (
        <>
            <div className={styles.upcomingmain}>
                <h6 className={styles.datetitle}>Total Received</h6>
                <h6 className={styles.amount}>R0.00</h6>
                <h6 className={styles.title}>Documents</h6>
            </div>
        </>
    )
}

export default ClientPayment