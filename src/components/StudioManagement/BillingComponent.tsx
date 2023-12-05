import { FunctionComponent, useEffect, useState } from "react";
import { Col, Image, Ratio, Row } from "react-bootstrap";
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import styles from "./Billing.module.css";
import BillingNav from "./BillingNav";
import DashboardService from "../../api/Dashboard/dashboard";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import BillingCard from "./Components/BillingCard";




const planDetails = [
    {
        active: true,
        headline: "Just To Get You Started",
        upperTitle: "Free",
        bottomTitle: "Forever",
        price: 0,
        descriptions: ["3GB Storage","No Royalty Music","No Video Uploads"],
        btnText: "I Just Arrived",
        currency:"R"
    },
    {
        active: false,
        headline: "Okay We See You",
        upperTitle: "Starter",
        bottomTitle: "Package",
        price: 250,
        descriptions: ["100GB Storage","Royalty Music"],
        btnText: "Start Rolling",
        currency:"R"
    },
    {
        active: false,
        headline: "Things Are Getting Serious",
        upperTitle: "Professional",
        bottomTitle: "Hustler",
        price: 699,
        descriptions: ["500GB Storage","Royalty Music"],
        btnText: "Start Rolling",
        currency:"R"
    },
    {
        active: false,
        headline: "The Boss Has Arrived",
        upperTitle: "Elite",
        bottomTitle: "Hustler",
        price: 1099,
        descriptions: ["1TB Storage","Royalty Music"],
        btnText: "Start Rolling",
        currency:"R"
    },
    {
        active: false,
        headline: "The Boss Has Arrived",
        upperTitle: "Elite",
        bottomTitle: "Hustler",
        price: 1099,
        descriptions: ["1TB Storage","Royalty Music"],
        btnText: "Start Rolling",
        currency:"R"
    },
]

const BillingComponent: any = () => {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const [plans , setPlans] = useState<any>([]);

    const fetchPlans = async ()=>{
        try {
            setLoader(true);
            const {result} = await DashboardService.getPlans();
            setPlans(result);
            setLoader(false);

        } catch (error) {
            setLoader(true);
            NotificationWithIcon("error","Somethig went Wrong")
        }
    }

    useEffect(()=>{
        fetchPlans();
    },[])

    const handlePlan = async (planId: any) => {
        try {
            setLoader(true);
            const clientRes = await DashboardService.getStorage({
                planId,
                amount: 500,
            });

            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                window.location.replace(clientRes?.result?.paymentUrl);
                setLoader(false);
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
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                    VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    return (
        <>
            {loader && <Loader />}

            <div className={styles.maindiv}>
                <div className={styles.navbarcover}>
                    <div className={styles.navtitle}>Settings</div>
                </div>
                <BillingNav />
                <div className={styles.allcards}>
                    <Row>
                        {plans.map((plan:any)=>(
                            <BillingCard active={plan.active} 
                            upperTitle={plan.name} 
                            currency={plan.currency} 
                            description={plan.description}
                            bottomTitle={plan.bottomTitle}
                            btnText={plan.active ? "I Just Arrived" : "Start Rolling"}
                            headline={plan.headline}
                            price={plan.amountPerMonth}
                            handlePlan={handlePlan}
                            planId={plan.id}
                            />
                        ))}
                    </Row>
                </div>
                <div className={styles.buystorage}>
                    <Row>
                        <div className={styles.storagetitle}>
                            Buy Storage Only
                        </div>
                        <Col sm={12} md={3} lg={3}>
                            <button
                                className={styles.buystoragebtn}
                                style={{
                                    color: "white",
                                    backgroundColor: "black",
                                }}
                            >
                                Buy More Storage
                            </button>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <button
                                className={styles.buystoragebtn}
                                style={{
                                    color: "black",
                                    backgroundColor: "#E7E5E5",
                                }}
                            >
                                10GB
                            </button>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <button
                                className={styles.buystoragebtn}
                                style={{
                                    color: "black",
                                    backgroundColor: "#E7E5E5",
                                }}
                            >
                                R10
                            </button>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <button className={styles.buystoragebtn}>
                                Purchase
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default BillingComponent;
