import { Col, Row, Ratio } from "react-bootstrap";
import styles from './Speciality.module.css'
import Skeleton from '@mui/material/Skeleton';

const SpecialityLoader=()=>{

    return(
        <>
        <Row>
                <Col xl={8} lg={8} className={styles.specialmain}>

                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>
                <Col xl={2} lg={2} md={3} sm={4} xs={4} className={styles.singlemain}>
                    <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <Skeleton variant="circular" width={100} height={100} />
                    </Ratio>
                </Col>

                </Col>
            </Row>
        </>
    )

}

export default SpecialityLoader