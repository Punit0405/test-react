import { Button, Col, Row } from "react-bootstrap";
import styles from "./StudioDashboard.module.css";
import CreateOptions from "./CreateOptions";
import DashboardSpeciality from "./DashboardSpeciality";
import DashboardRecentDoc from "./DashboardRecentDoc";
import DashboardUpcoming from "./DashboardUpcoming";
import { useEffect, useState } from "react";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
import TemplateLoader from "../Loader/TemplateLoader";

const StudioDashBoard: any = () => {
    const [loader, setLoader] = useState(true);

    const [document, setDocument] = useState([]);
    const [booking, setBooking] = useState([]);
    const [speciality, setSpeciality] = useState([]);

    const navigate = useNavigate();

    const getBooking = async () => {
        try {
            const res = await StudioClientSevice.getDashboardData();
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                setDocument(res?.result?.data?.document);
                setBooking(res?.result?.data?.booking);
                setSpeciality(res?.result?.data?.speciality);
                setLoader(false);
            } else {
                setLoader(false);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    useEffect(() => {
        getBooking();
    }, []);

    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.navtitle}>Studio Management</div>
                <div className={styles.createDiv}>
                    <h6>Create</h6>
                    <CreateOptions />
                </div>
                {loader ? (
                    <TemplateLoader />
                ) : (
                    <div className={styles.createDiv}>
                        <Row>
                            <Col sm={12} lg={8} xl={8}>
                                <h6>My Specialities</h6>
                                <DashboardSpeciality speciality={speciality} />
                                <h6 className={styles.titlename}>
                                    Recent Documents
                                </h6>
                                <DashboardRecentDoc document={document} />
                            </Col>
                            <Col sm={12} lg={4} xl={4}>
                                <h6>Upcoming Sessions</h6>
                                <DashboardUpcoming booking={booking} />
                            </Col>
                        </Row>
                    </div>
                )}
            </div>
        </>
    );
};

export default StudioDashBoard;
