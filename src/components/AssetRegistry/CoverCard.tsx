import { FunctionComponent, useState } from "react";
import { Image, Ratio } from "react-bootstrap";
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import styles from "./GetCover.module.css";

const activeCard = {
    color: "white",
    backgroundColor: "#EC1A25"
}

const activeBtn = {
    color: "black",
    backgroundColor: "white",
}

const CoverCard: any = (props: any) => {
    return (
        <Ratio aspectRatio="1x1" className={styles.maincard}>
            <div className={styles.singlecard}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.subtitle}>{props.subtitle1}</div>
                <div className={styles.subtitle}>{props.subtitle2}</div>
                <div className={styles.imgsvg}>
                    <Image src={props.imgpath} />
                </div>
                <div className={styles.btndiv}>
                    <button className={styles.addNewDevicebtn} >
                        {props.btnname}
                    </button>
                </div>
            </div>
        </Ratio>
    )
}

export default CoverCard;