import { FunctionComponent, useCallback } from "react";
import styles from "./AssetLeftContainer.module.css";

const AssetLeftContainer: FunctionComponent = () => {
  const onMyDevicesClick = useCallback(() => {
    // Please sync "Add Device" to the project
  }, []);

  return (
    <section className={styles.assetleftcontainer}>
      <div className={styles.buttoncontainres}>
        <button className={styles.dashboard}>
          <i className="fa-regular fa-house setcolorwhite"></i>
          <div className={styles.dashboard1}>Dashboard</div>
        </button>
        <button className={styles.myDevices} onClick={onMyDevicesClick}>
          <i className="fa-light fa-envelope setcolor"></i>
          <div className={styles.myDevices1}>My Devices</div>
        </button>
        <button className={styles.getCover}>
          <i className="fa-regular fa-user setcolor"></i>
          <div className={styles.productsForSale}>Get Cover</div>
        </button>
        <button className={styles.prouctsForSale}>
          <i className="fa-regular fa-circle-dollar setcolor"></i>
          <div className={styles.productsForSale}>Products For Sale</div>
        </button>
        <button className={styles.producsForRent}>
          <i className="fa-regular fa-grid-2 setcolor"></i>
          <div className={styles.productsForSale}>Products For Rent</div>
        </button>
      </div>
    </section>
  );
};

export default AssetLeftContainer;