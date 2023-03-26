import { FunctionComponent, useCallback, useState } from "react";
import styles from "./AssetLeftContainer.module.css";
import $ from 'jquery';
import { Link } from "react-router-dom";

const activeStyle = {
  backgroundColor: "var(--color-crimson)",
  color: "white"
}

const activeText = {
  color: "white"
}

const AssetLeftContainer: FunctionComponent = () => {

  const hideSideBar = () => {
    $("#leftContainer").css({ left: '-100%', display: "block" })
  }

  async function handleClick(number: any) {
    setActive(number)
  }

  const [active, setActive] = useState(1)

  return (
    <section className={`${styles.assetleftcontainer}`} id="leftContainer">
      <div className={styles.leftDivCancel} onClick={hideSideBar}> <i className="fa-solid fa-xl fa-xmark"></i></div>

      <div className={styles.buttoncontainres}>

        <button
          className={styles.leftDivButtonWithoutColor}
          onClick={() => { handleClick(1) }}
          style={active === 1 ? activeStyle : {}}
        >
          {
            active === 1 ? <i className="fa-regular fa-house setsizeasset"></i> :
              <i className="fa-regular fa-house setcolor"></i>
          }
          <Link to="">
            <div className={styles.leftDivButtonText} style={active === 1 ? activeText : {}}>Dashboard</div>
          </Link>

        </button>

        <button
          className={styles.leftDivButtonWithoutColor}
          onClick={() => { handleClick(2) }}
          style={active === 2 ? activeStyle : {}}
        >
          {
            active === 2 ? <i className="fa-light fa-envelope setsizeasset"></i> :
              <i className="fa-light fa-envelope setcolor"></i>
          }
          <Link to="device-list">
            <div className={styles.leftDivButtonText} style={active === 2 ? activeText : {}}>My Devices</div>
          </Link>
        </button>

        <button
          className={styles.leftDivButtonWithoutColor}
          onClick={() => { handleClick(3) }}
          style={active === 3 ? activeStyle : {}}
        >
          {
            active === 3 ? <i className="fa-regular fa-user setsizeasset"></i> :
              <i className="fa-regular fa-user setcolor"></i>
          }
          <Link to="get-cover">
            <div className={styles.leftDivButtonText} style={active === 3 ? activeText : {}}>Get Cover</div>
          </Link>
        </button>
        <button className={styles.leftDivButtonWithoutColor}>
          <i className="fa-regular fa-circle-dollar setcolor"></i>
          <Link to="for-sale">
            <div className={styles.leftDivButtonText}>Products For Sale</div>
          </Link>
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