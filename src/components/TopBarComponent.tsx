import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Popover, Ratio } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { NotificationWithIcon, getNameAndProfile } from "../Utils/helper";
import styles from "./TopBarComponent.module.css";
import { Doughnut } from 'react-chartjs-2';
import AssetRegisteryChartComp from "./AssetRegistry/AssetRegisteryChartComp";
import DashboardService from "../api/Dashboard/dashboard";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../Utils/constants";

const TopBarComponent: FunctionComponent = () => {
    const { firstName, lastName } = getNameAndProfile()
    const [storage, setStorage]: any = useState({})
    const [graph, setGraph]: any = useState({})
    const navigate = useNavigate();
    const logoutFunction = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }
    const data = {
        labels: [
            'Total',
            'Used'
        ],
        datasets: [{
            label: 'Summary Section',
            data: [70, 30],
            backgroundColor: [
                '#EC1A25',
                '#D9D9D9',
            ],
            hoverOffset: 10,

        }]
    };
    useEffect(() => {
        getUserStorage()
    }, [])


    const getUserStorage = async () => {
        try {
            const res = await DashboardService.getUserStorage()
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                setStorage(res?.result)
                setGraph({
                    labels: [
                        'Total',
                        'Used'
                    ],
                    datasets: [{
                        label: 'Summary Section',
                        data: [
                            res?.result?.usedSpace / res?.result?.totalAllowedSpace,
                            res?.result?.remainingSpace / res?.result?.totalAllowedSpace
                        ],
                        backgroundColor: [
                            '#EC1A25',
                            '#D9D9D9',
                        ],
                        hoverOffset: 10,

                    }]
                })
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    return (
        <Navbar className={styles.topbar} id="headerTopbar">
            <div className={styles.artboard134x81Parent} id="innerHeader">
                <Image fluid
                    className={styles.artboard134x81}
                    alt=""
                    src="../../snape_logo@2x.png"
                />
                <div className={styles.frameParent}>
                    <Ratio aspectRatio='1x1' className={styles.navimg}>
                        <Image fluid
                            className={styles.maskGroupIcon1}
                            alt=""
                            src="../../profile_image@2x.png"
                        />
                    </Ratio>
                    <NavDropdown
                        align="end"
                        title={`${firstName} ${lastName}`} className={styles.navdropdown} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Branding</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/settings/billing">Billing</NavDropdown.Item>
                        <OverlayTrigger
                            trigger="focus"
                            key='left'
                            placement='left'
                            overlay={
                                <Popover id={`popover-positioned-left`}>
                                    <Popover.Header as="h3">Storage Usage</Popover.Header>
                                    <Popover.Body className={styles.storagemain}>
                                        <div>
                                            <Doughnut data={graph} />
                                        </div>
                                        <div className={styles.categorysection}>
                                            <div className={styles.cellphoneParent}>
                                                <AssetRegisteryChartComp percentage="3.00 GB" backgroundColor="#F9B91B" categoryTitle="Total Storage" />
                                            </div>
                                            <div className={styles.cellphoneParent}>
                                                <AssetRegisteryChartComp
                                                    percentage={`${((storage.usedSpace / storage.totalAllowedSpace) * 100).toFixed(2)}%`}
                                                    backgroundColor="#EC1A25"
                                                    categoryTitle="Used" />
                                                <AssetRegisteryChartComp
                                                    percentage={`${storage.usedSpace} GB`}
                                                    backgroundColor="#EC1A25"
                                                    categoryTitle="Used" />
                                            </div>
                                            <div className={styles.cellphoneParent}>
                                                <AssetRegisteryChartComp
                                                    percentage={`${((storage.remainingSpace / storage.totalAllowedSpace) * 100).toFixed(2)}%`}
                                                    backgroundColor="#D9D9D9"
                                                    categoryTitle="Remaining" />
                                                <AssetRegisteryChartComp
                                                    percentage={storage.remainingSpace > 3000 ? '3.00 GB' : `${storage.remainingSpace} GB`}
                                                    backgroundColor="#D9D9D9"
                                                    categoryTitle="Remaining" />
                                            </div>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button variant="custom" className={styles.stroageBtn}>View Storage</Button>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logoutFunction()}>
                            Log out
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </Navbar >

    );
};

export default TopBarComponent;
