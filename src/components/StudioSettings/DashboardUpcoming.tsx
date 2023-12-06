import { Col, Image, Offcanvas, Ratio, Row } from "react-bootstrap";
import styles from "./DashboardUpcoming.module.css";
import { useState } from "react";
import Moment from "react-moment";

const DashboardUpcoming: any = ({ booking }: any) => {
    const [book, setBook]: any = useState({});
    const setSelect = (booking: any) => {
        console.log(booking, "-----booking----");
        setBook(booking);
        setShow(true);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <div className={styles.upcomingmain}>
                <h6 className={styles.datetitle}>
                    <Moment format="MMMM  Do, YYYY">
                        {booking[0]?.startDate}
                    </Moment>
                </h6>
                <div className={styles.allsessions}>
                    {booking &&
                        booking?.map((book: any) => (
                            <Row className={styles.customerBox}>
                                <Col xs={3} sm={3} md={2} lg={3} xl={3}>
                                    <Ratio aspectRatio="1x1">
                                        <Image
                                            className={styles.imgdiv}
                                            alt="customer img"
                                            src={book?.clientId?.profileUrl}
                                        />
                                    </Ratio>
                                </Col>
                                <Col
                                    xs={7}
                                    sm={7}
                                    md={8}
                                    lg={7}
                                    xl={7}
                                    className={styles.namediv}
                                >
                                    <div className={styles.customerData}>
                                        <div className={styles.customerName}>
                                            {book?.clientId?.name}
                                        </div>
                                        <div className={styles.customerTime}>
                                            <Moment format="HH:MM">
                                                {book?.startDate}
                                            </Moment>{" "}
                                            -{" "}
                                            <Moment format="HH:MM">
                                                {book?.endDate}
                                            </Moment>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    xs={2}
                                    sm={2}
                                    md={2}
                                    lg={2}
                                    xl={2}
                                    onClick={() => setSelect(book)}
                                >
                                    <div className={styles.rightCustomerImage}>
                                        <img
                                            className={styles.groupIcon}
                                            alt=""
                                            src="../../../group-103.svg"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        ))}
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className={styles.offcanvasdiv}>
                        <div className="d-flex align-items-center">
                            <Image
                                className={styles.offimgdiv}
                                alt="customer img"
                                src={book?.clientId?.profileUrl}
                            />
                            <div className={styles.offcanvasName}>
                                {book?.clientId?.name}
                            </div>
                        </div>
                        <div className="my-4">
                            <div className={`my-2 ${styles.titleheading}`}>
                                Title :
                            </div>
                            <div className={styles.title}>{book?.title}</div>
                        </div>
                        <div className="my-4">
                            <div className={`my-2 ${styles.titleheading}`}>
                                Description :
                            </div>
                            <div className={styles.title}>
                                {book?.description}
                            </div>
                        </div>
                        <div className="my-4">
                            <div className={`my-2 ${styles.titleheading}`}>
                                Start Time :
                            </div>
                            <div className={styles.title}>
                                <Moment format="MMMM  Do, YYYY HH:MM">
                                    {book?.startDate}
                                </Moment>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className={`my-2 ${styles.titleheading}`}>
                                End Time :
                            </div>
                            <div className={styles.title}>
                                <Moment format="MMMM  Do, YYYY HH:MM">
                                    {book?.endTime}
                                </Moment>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default DashboardUpcoming;
