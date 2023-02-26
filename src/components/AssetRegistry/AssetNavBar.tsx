import { FunctionComponent } from "react";
import styles from "./AssetNavBar.module.css";
import $ from 'jquery';


const AssetNavBar: FunctionComponent = () => {
  const displaySideBar = () =>{
    $("#leftContainer").toggle(function(){
      $('#leftContainer').animate({
     width: "300px"
      }, 100);
     });

  }
  return (
    <div className={styles.assetnavbar}>
        <div className={styles.openSidebar} onClick={displaySideBar}> <i className="fa-solid  fa-bars"></i></div>
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