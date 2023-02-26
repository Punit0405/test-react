import { FunctionComponent } from "react";
import AssetLeftContainer from "../components/AssetRegistry/AssetLeftContainer";
import AssetDashboardMain from "../components/AssetRegistry/AssetDashboardMain";
import styles from "./AssetRegistry.module.css";
import NavLayout from "../components/NavLayout";
import Constants from "../Config/Constants";

const AssetRegistry: FunctionComponent = () => {
  return (
        <>
    <div className={styles.assetRegistry}>
    <section className={styles.bottomscreen}>
        <AssetLeftContainer />
        <AssetDashboardMain />
      </section>
    </div>

    </>

   
  );
};

export default AssetRegistry;