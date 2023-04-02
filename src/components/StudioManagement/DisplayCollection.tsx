import { width } from "@mui/system";
import { FunctionComponent, useState, useEffect } from "react";
import Grid from "../Grid";
import CustomDropdownItem from "./CustomDropdownItem";
import styles from "./Design.module.css"
import DesignCollectionNav from "./DesignCollectionNav";
import DesignCollectionNavMobile from "./DesignCollectionNavMobile";
import GridVerticalMobile from "./GridVerticalMobile";
import GridVerticalPc from "./GridVerticalPc";
import { useSelector, useDispatch } from 'react-redux'
import { Image } from "react-bootstrap";

const DisplayCollection: FunctionComponent = () => {

    const [grid, setGrid] = useState("Vertical")
    const [space, setSpace] = useState("Regular")
    const [theme, setTheme] = useState([])

    const myState = useSelector((state: any) => state.changeDesign)

    console.log(grid, '====grid====');
    console.log(space, '====space====');

    useEffect(() => {
        setGrid(myState.gridstyle)
        setSpace(myState.gridspace)
        setTheme(myState.theme)
    }, [myState])


    return (
        <>
            <div className={styles.sample}>
                <div
                    className={styles.pcscreen}
                    style={theme && theme.length ? {
                        backgroundColor: theme[0]
                    } : { backgroundColor: "white" }}
                >
                    {/* {myState.changeDesign.gridstyle} */}
                    <DesignCollectionNav />
                    {/* <GridVerticalPc /> */}
                    {
                        (grid === "Vertical" && space === "Regular") ?
                            < Image fluid src="../../gridverticalregular.png" /> :
                            (
                                (grid === "Vertical" && space === "Large") ?
                                    < Image fluid src="../../gridverticallarge.png" /> :
                                    (
                                        (grid === "Horizontal" && space === "Regular") ?
                                            < Image fluid src="../../grridhorizontalregular.png" /> :
                                            (
                                                < Image fluid src="../../gridhorizontallarge.png" />
                                            )
                                    )
                            )
                    }
                </div>
                <div
                    className={styles.mobilescreen}
                    style={theme && theme.length ? {
                        backgroundColor: theme[0]
                    } : { backgroundColor: "white" }}
                >
                    <div className={styles.mobiletitlediv}>
                        <DesignCollectionNavMobile />
                        {/* <GridVerticalMobile /> */}
                        {
                            (grid === "Vertical" && space === "Regular") ?
                                < Image fluid src="../../gridverticalregularmobile.png" /> :
                                (
                                    (grid === "Vertical" && space === "Large") ?
                                        < Image fluid src="../../grridverticallargemobile.png" /> :
                                        (
                                            (grid === "Horizontal" && space === "Regular") ?
                                                < Image fluid src="../../grridhorizontalregularmobile.png" /> :
                                                (
                                                    < Image fluid src="../../grridhorizontallargemobile.png" />
                                                )
                                        )
                                )
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

export default DisplayCollection;
