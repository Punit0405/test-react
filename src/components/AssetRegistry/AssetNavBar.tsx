import { FunctionComponent } from "react";
import styles from "./AssetNavBar.module.css";

const AssetNavBar: FunctionComponent = () => {
  return (
    <div className={styles.assetnavbar}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.frameParent}>
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search IMEI"
          />
        <i className="fa-sharp fa-solid fa-right-left m-4"></i>
        </div>
        <button className={styles.addNewDevice}>
          Add New Device
        </button>

    </div>
  );
};

export default AssetNavBar;