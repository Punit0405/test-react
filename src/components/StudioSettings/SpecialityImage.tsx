import { Col, Image, Ratio } from "react-bootstrap"
import styles from "./DashboardSpeciality.module.css";

const SpecialityImage: any = () => {
    return (
        <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
            <Ratio aspectRatio="1x1" className={styles.outerimg} >
                <div className={styles.imgdiv}>
                    <div className={styles.overlay}></div>
                    <Image className={styles.myimage} src="../../../special.png" />
                    <div className={styles.button}>
                        <i className={`fa-regular fa-pen specialediticonsingle ${styles.pensymbol}`}></i>
                        <span className={styles.name}>Action</span>
                    </div>
                </div>
            </Ratio>
        </Col>
    )
}

export default SpecialityImage