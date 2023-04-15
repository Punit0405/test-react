import { FunctionComponent } from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Popover, Ratio } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getNameAndProfile } from "../Utils/helper";
import styles from "./TopBarComponent.module.css";
import { Doughnut } from 'react-chartjs-2';

const TopBarComponent: FunctionComponent = () => {
    const { firstName, lastName } = getNameAndProfile()
    const navigate = useNavigate();
    const logoutFunction = () => {
        localStorage.removeItem("accessToken");
        navigate("/");

    }
    const data = {
        labels: [
            'Cell Phone',
            'Camera',
            'Screen',
            'Printer'
        ],
        datasets: [{
            label: 'Summary Section',
            data: [30, 34, 6, 30],
            backgroundColor: [
                '#EC1A25',
                '#F9B91B',
                '#FF569A',
                '#252525'
            ],
            hoverOffset: 10,

        }]
    };
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
                                    <Popover.Body>
                                        <Doughnut data={data} />
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
