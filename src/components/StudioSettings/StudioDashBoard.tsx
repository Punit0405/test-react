import { Button, Col, Row } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import CreateOptions from "./CreateOptions";
import DashboardSpeciality from "./DashboardSpeciality";
import DashboardRecentDoc from "./DashboardRecentDoc";
import DashboardUpcoming from "./DashboardUpcoming";

const StudioDashBoard: any = () => {

    return (
        <div className={styles.maindiv}>
            <div className={styles.navtitle}>
                Studio Management
            </div>
            <div className={styles.createDiv}>
                <h6>Create</h6>
                <CreateOptions />
            </div>
            <div className={styles.createDiv}>
                <Row>
                    <Col sm={12} lg={8} xl={8}>
                        <h6>My Specialities</h6>
                        <DashboardSpeciality />
                        <h6 className={styles.titlename}>Recent Documents</h6>
                        <DashboardRecentDoc />
                    </Col>
                    <Col sm={12} lg={4} xl={4}>
                        <h6>Upcoming Sessions</h6>
                        <DashboardUpcoming />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default StudioDashBoard;