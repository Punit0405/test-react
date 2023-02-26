import { FunctionComponent, useState } from "react";
import AssetNavBar from "./AssetNavBar";
import styles from "./AssetDashboardMain.module.css";
import { PieChart } from 'react-minimal-pie-chart';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import AssetRegisteryChartComp from "./AssetRegisteryChartComp";
Chart.register(ArcElement);
 {/* <PieChart
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
/> */}



const AssetDashboardMain: FunctionComponent = () => {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  const data = {
    labels: [
      'Cell Phone',
      'Camera',
      'Screen',
      'Printer'
    ],
    datasets: [{
      label: 'Summary Section',
      data: [30, 34, 6, 30],
      backgroundColor: [
        '#EC1A25',
        '#F9B91B',
        '#FF569A',
        '#252525'
      ],
      hoverOffset: 10,

    }]
  };
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
        <div>
       <Doughnut data={data}/>
</div>
        <div className={styles.categorysection}>
          <div className={styles.cellphoneParent}>
           <AssetRegisteryChartComp percentage="30%" backgroundColor="#EC1A25" categoryTitle="Cell Phone"/>
           <AssetRegisteryChartComp percentage="34%"  backgroundColor="#F9B91B" categoryTitle="Camera"/>
          </div>
          <div className={styles.cellphoneParent}>
           <AssetRegisteryChartComp percentage="6%"  backgroundColor="#FF569A"  categoryTitle="Screen"/>
           <AssetRegisteryChartComp percentage="30%"  backgroundColor="#252525"  categoryTitle="Printer"/>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDashboardMain;