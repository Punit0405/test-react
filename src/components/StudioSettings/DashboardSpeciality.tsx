import styles from "./DashboardSpeciality.module.css";
import { Button, Image, Ratio } from "react-bootstrap";

const DashboardSpeciality: any = () => {
    return (
        <>
            <div className={styles.specialmain}>
                <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <div className={styles.imgdiv}>
                        <div className={styles.overlay}></div>
                        <Image className={styles.myimage} src="../../../special.png" />
                        <div className={styles.button} >Action</div>
                    </div>
                </Ratio>
                <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <div className={styles.imgdiv}>
                        <div className={styles.overlay}></div>
                        <Image className={styles.myimage} src="../../../special2.png" />
                        <div className={styles.button} >Celebration</div>
                    </div>
                </Ratio>
                <Ratio aspectRatio="1x1" className={styles.outerimg} >
                    <div className={styles.imgdiv}>
                        <div className={styles.overlay}></div>
                        <Image className={styles.myimage} src="../../../sample2.jpg" />
                        <div className={styles.button} >Family</div>
                    </div>
                </Ratio>
            </div>
        </>
    )
}

export default DashboardSpeciality