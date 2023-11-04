import { FunctionComponent, useEffect, useState } from "react";
import { Col, Image, Ratio, Row } from "react-bootstrap";
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import styles from "./SuccessComponent.module.css";
import BillingNav from "./BillingNav";
import DashboardService from "../../api/Dashboard/dashboard";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Alert } from "antd";

const SuccessComponent: any = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [loader, setLoader] = useState(true);
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        checkStatus();
    },[]);

    const checkStatus = async () => {
        try {
            const reference = searchParams.get("reference");
            console.log(reference, "checkStatus");
            const clientRes = await DashboardService.verifyPayment(reference);

            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setStatus(true);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setMsg(
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
                setStatus(false);
                setLoader(false);
            }
        }
    };
    return (
        <div className={styles.maincomp}>
            {loader ? (
                <Loader />
            ) : (
                <>
                    {status ? (
                        <Alert
                            message="Payment Successful"
                            description="Your Payment is done. You can view your storage now."
                            type="success"
                            showIcon
                        />
                    ) : (
                        <Alert
                            message="Payment Fail"
                            description={msg}
                            type="error"
                            showIcon
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default SuccessComponent;
