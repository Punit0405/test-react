import { FunctionComponent, useState } from "react";
import { Image, Ratio } from "react-bootstrap";
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";
import CoverCard from "./CoverCard";
import styles from "./GetCover.module.css";

const activeCard = {
    color: "white",
    backgroundColor: "#EC1A25"
}

const activeBtn = {
    color: "black",
    backgroundColor: "white",
}


const GetCover: any = () => {

    async function handleClick(divno: any) {
        setActive(divno)
    }
    const [active, setActive] = useState(1)
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={styles.maindiv}>
            <div className={styles.navbarcover}>
                <div className={styles.navtitle}>
                    Get Cover
                </div>
                <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                    Add New Device
                </button>
                <AddNewDeviceModal show={modalShow}
                    onHide={() => setModalShow(false)} />
            </div>
            <div className={styles.allcards}>
                <Ratio
                    aspectRatio="1x1"
                    className={styles.maincard}
                    style={active === 1 ? activeCard : {}}
                    onClick={() => handleClick(1)}
                >
                    <div className={styles.singlecard}>
                        <div className={styles.title}>
                            Insurance For your Assets
                        </div>
                        <div className={styles.subtitle}>Commercial</div>
                        <div className={styles.subtitle}>Cover</div>
                        <div className={styles.imgsvg}>
                            <Image src="../../../camera.svg" />
                        </div>
                        <div className={styles.btndiv}>
                            <button
                                className={styles.addNewDevicebtn}
                                style={active === 1 ? activeBtn : {}}
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </Ratio>
                <Ratio
                    aspectRatio="1x1"
                    className={styles.maincard}
                    style={active === 2 ? activeCard : {}}
                    onClick={() => handleClick(2)}
                >
                    <div className={styles.singlecard}>
                        <div className={styles.title}>
                            Insurance For your Home
                        </div>
                        <div className={styles.subtitle}>Home</div>
                        <div className={styles.subtitle}>Contents</div>
                        <div className={styles.imgsvg}>
                            <Image src="../../../home.svg" />
                        </div>
                        <div className={styles.btndiv}>
                            <button
                                className={styles.addNewDevicebtn}
                                style={active === 2 ? activeBtn : {}}
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </Ratio>
                <Ratio
                    aspectRatio="1x1"
                    className={styles.maincard}
                    style={active === 3 ? activeCard : {}}
                    onClick={() => handleClick(3)}
                >
                    <div className={styles.singlecard}>
                        <div className={styles.title}>
                            Insurance For your Life
                        </div>
                        <div className={styles.subtitle}>Life</div>
                        <div className={styles.subtitle}>Cover</div>
                        <div className={styles.imgsvg}>
                            <Image src="../../../man.svg" />
                        </div>
                        <div className={styles.btndiv}>
                            <button
                                className={styles.addNewDevicebtn}
                                style={active === 3 ? activeBtn : {}}
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </Ratio>
                <Ratio
                    aspectRatio="1x1"
                    className={styles.maincard}
                    style={active === 4 ? activeCard : {}}
                    onClick={() => handleClick(4)}
                >
                    <div className={styles.singlecard}>
                        <div className={styles.title}>
                            Insurance For your Passing
                        </div>
                        <div className={styles.subtitle}>Funeral</div>
                        <div className={styles.subtitle}>Cover</div>
                        <div className={styles.imgsvg}>
                            <Image src="../../../funeral.svg" />
                        </div>
                        <div className={styles.btndiv}>
                            <button
                                className={styles.addNewDevicebtn}
                                style={active === 4 ? activeBtn : {}}
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </Ratio>
            </div>
            <div className={styles.allcards}>
                <Ratio
                    aspectRatio="1x1"
                    className={styles.maincard}
                    style={active === 5 ? activeCard : {}}
                    onClick={() => handleClick(5)}
                >
                    <div className={styles.singlecard}>
                        <div className={styles.title}>
                            Insurance For your Car
                        </div>
                        <div className={styles.subtitle}>Vehicle</div>
                        <div className={styles.subtitle}>Cover</div>
                        <div className={styles.imgsvg}>
                            <Image src="../../../car.svg" />
                        </div>
                        <div className={styles.btndiv}>
                            <button
                                className={styles.addNewDevicebtn}
                                style={active === 5 ? activeBtn : {}}
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </Ratio>
                <Ratio aspectRatio="1x1" className={styles.maincardempty}><div></div></Ratio>
                <Ratio aspectRatio="1x1" className={styles.maincardempty}><div></div></Ratio>
                <Ratio aspectRatio="1x1" className={styles.maincardempty}><div></div></Ratio>
            </div>
            <div className={styles.footerbottom}>
                All Our Insurance Policies are brokered by Tsoga Afrika Insurance brokers an authorized Financial Services Provider Licence Number: 49909
            </div>
        </div>
    );
};

export default GetCover;