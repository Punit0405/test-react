import { useState } from "react";
import styles from './Speciality.module.css'
import { Col, Row } from "react-bootstrap";
import SpecialityImage from "./SpecialityImage";
import AddNewSpeciality from "../Modal/AddNewSpeciality";

const Speciality: any = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Speciality</div>
                <div className={styles.frameParent}>
                    <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Speciality
                    </button>
                </div>
            </div>
            <p className={styles.subtitle}>
                Specifying your speciality helps your customers see what kind of photography/videography you specialise in.
            </p>
            <Row>
                <Col xl={8} lg={8} className={styles.specialmain}>
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                    <SpecialityImage className={styles.specialsingle} />
                </Col>
                <Col xl={4} lg={4}></Col>
            </Row>
            <AddNewSpeciality
                show={modalShow}
                onHide={() => setModalShow(false)}
                createnew={true}
            />
        </div>
    )

}

export default Speciality