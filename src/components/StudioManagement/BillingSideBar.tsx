import { FunctionComponent, useCallback } from "react";
import styles from "./StudioManagementSide.module.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const BillingSideBar: FunctionComponent = () => {
    const onMyDevicesClick = useCallback(() => {
        // Please sync "Add Device" to the project
    }, []);
    const hideSideBar = () => {
        $("#leftContainer").css({ left: "-100%", display: "block" });
    };

    return <div></div>;
};

export default BillingSideBar;
