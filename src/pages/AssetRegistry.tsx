import { FunctionComponent } from "react";
import AssetLeftContainer from "../components/AssetRegistry/AssetLeftContainer";
import AssetDashboardMain from "../components/AssetRegistry/AssetDashboardMain";
import styles from "./AssetRegistry.module.css";
import NavLayout from "../components/NavLayout";
import Constants from "../Config/Constants";

const AssetRegistry: FunctionComponent = () => {
  return (
    <NavLayout activeTab={Constants.NavbarTabs.ASSETREGISTRY}>
        <>
    <div className={styles.assetRegistry}>
    <section className={styles.bottomscreen}>
        <AssetLeftContainer />
        <AssetDashboardMain />
      </section>
    </div>

    </>

    </NavLayout>
  );
};

export default AssetRegistry;