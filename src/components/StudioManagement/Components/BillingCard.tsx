import React from 'react';
import { Col, Ratio } from "react-bootstrap";
import styles from "./BillingCard.module.css";


const activeCard = {
    color: "white",
    backgroundColor: "#EC1A25",
};

const activeBtn = {
    color: "black",
    backgroundColor: "white",
};

interface PropTyes {
    active:any,
    headline:any, 
    upperTitle:any, 
    bottomTitle:any, 
    price:any,
    description:any,
    btnText:any,
    currency:any,
    handlePlan:any,
    planId:any,
}


const BillingCard = ({ active, headline, upperTitle, bottomTitle, price,description,btnText ,currency,handlePlan,planId}: PropTyes) => {
    const descriptions = JSON.parse(description);
    
    return (
        <Col sm={12} md={4} lg={3}>
            <Ratio
                aspectRatio="1x1"
                className={styles.maincard}
                style={active ? activeCard : {}}
            >
                <div className={styles.singlecard}>
                    <div className={styles.title}>
                        {headline}
                    </div>
                    <div className={styles.subtitle}>{upperTitle}</div>
                    <div className={styles.subtitle}>
                        {bottomTitle}
                    </div>
                    <div className={styles.imgsvg}>
                        <div className={styles.points}>{currency} {price} p/m</div>
                        <ul className={styles.optionlist}>
                            {
                                descriptions.map((line: any) => (
                                    <li className={styles.points}>
                                        {line}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.btndiv}>
                        <button
                            onClick={() => {
                                handlePlan(planId);
                            }}
                            className={styles.addNewDevicebtn}
                            style={
                                active ? activeBtn : {}
                            }
                        >
                           {btnText}
                        </button>
                    </div>
                </div>
            </Ratio>
        </Col>
    )
}

export default BillingCard