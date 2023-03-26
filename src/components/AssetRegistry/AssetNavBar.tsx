import { useState } from "react";
import styles from "./AssetNavBar.module.css";
import $ from 'jquery';
import AddNewDeviceModal from "../Modal/AddNewDeviceModal";

interface Props {
  navTitle: string
}
const AssetNavBar = ({ navTitle }: Props) => {
  const displaySideBar = () => {
    $("#leftContainer").css({ left: '0%', display: "block" })

  }
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={styles.assetnavbar}>
      <div className={styles.openSidebar} onClick={displaySideBar}> <i className="fa-solid  fa-bars"></i></div>
      <div className={styles.dashboard}>{navTitle}</div>
      <div className={styles.frameParent}>
        <input
          className={styles.frameChild}
          type="text"
          placeholder="Search IMEI"
        />
        <i className="fa-sharp fa-solid fa-right-left m-4"></i>
      </div>
      <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
        Add New Device
      </button>
      <AddNewDeviceModal show={modalShow}
        onHide={() => setModalShow(false)} />

    </div>
  );
};

export default AssetNavBar;