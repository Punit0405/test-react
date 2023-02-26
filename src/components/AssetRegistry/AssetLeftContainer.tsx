import { FunctionComponent, useCallback } from "react";
import styles from "./AssetLeftContainer.module.css";
import $ from 'jquery';

const AssetLeftContainer: FunctionComponent = () => {
  const onMyDevicesClick = useCallback(() => {
    // Please sync "Add Device" to the project
  }, []);
  const hideSideBar = ()=>{
      $("#leftContainer").toggle(function(){
       $('#leftContainer').animate({
      width: "0px"
       }, 0);
      });

  }

  return (
    <section className={`${styles.assetleftcontainer}`} id="leftContainer">
      <div className={styles.leftDivCancel} onClick={hideSideBar}> <i className="fa-solid fa-xl fa-xmark"></i></div>
     
      <div className={styles.buttoncontainres}>
        <button className={styles.leftDivButton}>
          <i className="fa-regular fa-house setcolorwhite"></i>
          <div className={styles.leftDivButtonTextWhite}>Dashboard</div>
        </button>
        <button className={styles.leftDivButtonWithoutColor} onClick={onMyDevicesClick}>
          <i className="fa-light fa-envelope setcolor"></i>
          <div className={styles.leftDivButtonText}>My Devices</div>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-user setcolor"></i>
          <div className={styles.leftDivButtonText}>Get Cover</div>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-circle-dollar setcolor"></i>
          <div className={styles.leftDivButtonText}>Products For Sale</div>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-grid-2 setcolor"></i>
          <div className={styles.leftDivButtonText}>Products For Rent</div>
        </button>
      </div>
    </section>
  );
};

export default AssetLeftContainer;