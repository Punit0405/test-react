import { Col, Image, Ratio } from "react-bootstrap"
import styles from "./DashboardSpeciality.module.css";
import AddNewSpeciality from "../Modal/AddNewSpeciality";
import { useState } from "react";

const SpecialityImage: any = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
            <Ratio aspectRatio="1x1" className={styles.outerimg} >
                <div className={styles.imgdiv}>
                    <div className={styles.overlay}></div>
                    <Image className={styles.myimage} src="../../../special.png" />
                    <div className={styles.button} onClick={() => setModalShow(true)}>
                        <i className={`fa-regular fa-pen specialediticonsingle ${styles.pensymbol}`}></i>
                        <span className={styles.name}>Action</span>
                    </div>
                </div>
            </Ratio>
            <AddNewSpeciality
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}

export default SpecialityImage