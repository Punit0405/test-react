import styles from "./DashboardSpeciality.module.css";
import { Col, Image, Ratio, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardSpeciality: any = ({ speciality }: any) => {
    return (
        <>
            <Row className={styles.specialmain}>
                {speciality?.length &&
                    speciality.map((special: any) => (
                        <Col xl={2} lg={2} md={3} sm={4} xs={4}>
                            <Ratio
                                aspectRatio="1x1"
                                className={styles.outerimg}
                            >
                                <div className={styles.imgdiv}>
                                    <div className={styles.overlay}></div>
                                    <Image
                                        className={styles.myimage}
                                        src={special?.imageUrl}
                                    />
                                    <div className={styles.button}>
                                        {special?.name}
                                    </div>
                                </div>
                            </Ratio>
                        </Col>
                    ))}
            </Row>
            <Link to="speciality">
                <div className={styles.editspecial}>
                    <i className="fa-regular fa-pen specialediticon"></i>
                    <span className={styles.editname}>
                        Edit My Specialities
                    </span>
                </div>
            </Link>
        </>
    );
};

export default DashboardSpeciality;
