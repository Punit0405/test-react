import { FunctionComponent, useState } from "react";
import AssetNavBar from "./AssetNavBar";
import styles from "./AssetDashboardMain.module.css";
import { PieChart } from 'react-minimal-pie-chart';


const AssetDashboardMain: FunctionComponent = () => {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  return (
    <section className={styles.rightcontainer}>
      <AssetNavBar />
      <div className={styles.cardssection}>
        <div className={styles.deviceCard}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices Listed</div>
              <div >4</div>
            </div>
            <i className="fa-solid fa-display"></i>
          </div>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameGroup}>
            <div className={styles.devicesMarkedForSaleParent}>
              <div className={styles.devicesMarkedFor}>Devices Rented Out</div>
              <div>0</div>
            </div>
          </div>
            <i className="fa-regular fa-circle-dollar setcolor"></i>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameGroup}>
            <div className={styles.devicesMarkedForSaleParent}>
              <div className={styles.devicesMarkedFor}>Devices Rented Out</div>
              <div>0</div>
            </div>
          </div>
            <i className="fa-sharp fa-regular fa-arrow-up-from-line setcolor"></i>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameDiv}>
            <div className={styles.devicesLostParent}>
              <div className={styles.devicesLost}>Devices Lost</div>
              <div>0</div>
            </div>
          </div>
          <i className="fa-regular fa-lock-keyhole setcolor"></i>
        </div>
      </div>
      <div className={styles.summarySection}>
        <div><PieChart
        paddingAngle={1}
        animate={true}
        radius={50}
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
        data={[
         { title: 'Cell Phone', value: 30, color: '#EC1A25' },
         { title: 'Camera', value: 34, color: '#F9B91B' },
         { title: 'Screen', value: 6, color: '#FF569A' },
         { title: 'Printer', value: 30, color: '#252525' },
         ]}
/></div>
        <div className={styles.categorysection}>
          <div className={styles.cellphoneParent}>
            <div className={styles.cellphone}>
              <div className={styles.labellegendlight}>
                <div className={styles.labellegendlightChild} />
                <div className={styles.cellPhone}>Cell Phone</div>
              </div>
              <div >30%</div>
            </div>
            <div className={styles.camera}>
              <div className={styles.labellegendlight1}>
                <div className={styles.labellegendlightItem} />
                <div className={styles.cellPhone}>Camera</div>
              </div>
              <div >34%</div>
            </div>
          </div>
          <div className={styles.cellphoneParent}>
            <div className={styles.screen}>
              <div className={styles.labellegendlight2}>
                <div className={styles.labellegendlightInner} />
                <div className={styles.cellPhone}>Screen</div>
              </div>
              <div>6%</div>
            </div>
            <div className={styles.printer}>
              <div className={styles.labellegendlight3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.cellPhone}>Printer</div>
              </div>
              <div>30%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDashboardMain;