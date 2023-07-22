import { Col, Image, Ratio, Row } from "react-bootstrap";
import styles from "./DashboardUpcoming.module.css";

const DashboardUpcoming: any = () => {
    return (
        <>
            <div className={styles.upcomingmain}>
                <h6 className={styles.datetitle}>Monday, 16 Sept 2023</h6>
                <div className={styles.allsessions}>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../sample2.jpg`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../special2.png`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../special.png`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../sample2.jpg`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../special2.png`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.customerBox}>
                        <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                            <Ratio aspectRatio="1x1">
                                <Image
                                    className={styles.imgdiv}
                                    alt="customer img"
                                    src={`../../../special.png`}
                                />
                            </Ratio>
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={7} xl={7} className={styles.namediv}>
                            <div className={styles.customerData}>
                                <div className={styles.customerName}>
                                    Cameron green
                                </div>
                                <div className={styles.customerTime}>
                                    08:30
                                    -
                                    09:00
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                            <div className={styles.rightCustomerImage}>
                                <img
                                    className={styles.groupIcon}
                                    alt=""
                                    src="../../../group-103.svg"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default DashboardUpcoming