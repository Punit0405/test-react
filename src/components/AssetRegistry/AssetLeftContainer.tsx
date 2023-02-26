import { FunctionComponent, useCallback } from "react";
import styles from "./AssetLeftContainer.module.css";

const AssetLeftContainer: FunctionComponent = () => {
  const onMyDevicesClick = useCallback(() => {
    // Please sync "Add Device" to the project
  }, []);

  return (
    <section className={styles.assetleftcontainer}>
      <div className={styles.buttoncontainres}>
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-house setcolorwhite"></i>
          <div className={styles.leftDivButtonText}>Dashboard</div>
        </button>
        <button className={styles.leftDivButton} onClick={onMyDevicesClick}>
          <i className="fa-light fa-envelope setcolorwhite"></i>
          <div className={styles.leftDivButtonText}>My Devices</div>
        </button>
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-user setcolorwhite"></i>
          <div className={styles.leftDivButtonText}>Get Cover</div>
        </button>
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-circle-dollar setcolorwhite"></i>
          <div className={styles.leftDivButtonText}>Products For Sale</div>
        </button>
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-grid-2 setcolorwhite"></i>
          <div className={styles.leftDivButtonText}>Products For Rent</div>
        </button>
      </div>
    </section>
  );
};

export default AssetLeftContainer;