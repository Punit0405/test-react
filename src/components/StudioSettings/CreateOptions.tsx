import { Col, Row } from "react-bootstrap"
import styles from "./StudioDashboard.module.css";
import { Link } from "react-router-dom";

const CreateOptions: any = () => {
    return (
        <Row className={styles.creatediv}>
            
            <Col xl={3} lg={3} md={6} sm={12}>
                <button className={styles.buystoragebtn}>
                    <i className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}>
                    </i>
                    <span className={styles.btnname}>Invoice</span>
                </button>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
                <button className={styles.buystoragebtn}>
                    <i className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}>
                    </i>
                    <span className={styles.btnname}>Quotation</span>
                </button>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
                <button className={styles.buystoragebtn}>
                    <i className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}>
                    </i>
                    <span className={styles.btnname}>Contract</span>
                </button>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
                <Link to="questionnaires">
                <button className={styles.buystoragebtn}>
                    <i className={`fa-regular fa-plus fa-xl setcolorwithoutmargin ${styles.addbtn}`}>
                    </i>
                    <span className={styles.btnname}>Questionnaire</span>
                </button>
                </Link>
            </Col>
        </Row>
    )
}

export default CreateOptions