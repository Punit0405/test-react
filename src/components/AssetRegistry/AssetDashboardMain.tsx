import { FunctionComponent, useState, useEffect } from "react";
import AssetNavBar from "./AssetNavBar";
import styles from "./AssetDashboardMain.module.css";
import { PieChart } from 'react-minimal-pie-chart';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
import AssetRegisteryChartComp from "./AssetRegisteryChartComp";
import AssetRegistryService from "../../api/asset-registry/assetRegistry";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
Chart.register(ArcElement);

const AssetDashboardMain: FunctionComponent = () => {
  const [selected, setSelected] = useState<number | undefined>(0);
  const [hovered, setHovered] = useState<number | undefined>(undefined);
  const [totalAmount, setTotalAmount] = useState(0)
  const [summary, setSummary] = useState({ active: '0', sale: '0', lost: '0', rent: '0' })
  const [categoryData, setCategoryData] = useState([])
  const navigate = useNavigate();
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

  const getDashboardData = async () => {
    try {
      const res = await AssetRegistryService.getDashBoardData()
      if (res && res?.code === STATUS_CODE.SUCCESS) {
        setCategoryData(res?.result?.categoryData)
        setSummary(res?.result?.summary)
        setTotalAmount(res?.result?.totalAssetAmount)
        const summaryInfo: any = {}

        const activeObj = (res?.result?.summary).find((obj: any) => obj.status === 'Active')
        summaryInfo.active = activeObj?.devices ? activeObj?.devices : '0'
        const saleObj = (res?.result?.summary).find((obj: any) => obj.status === 'For Sale')
        summaryInfo.sale = saleObj?.devices ? saleObj?.devices : '0'
        const lostObj = (res?.result?.summary).find((obj: any) => obj.status === 'Lost')
        summaryInfo.lost = lostObj?.devices ? lostObj?.devices : '0'
        const rentObj = (res?.result?.summary).find((obj: any) => obj.status === 'For Rent')
        summaryInfo.rent = rentObj?.devices ? rentObj?.devices : '0'
        setSummary(summaryInfo)



      }
    } catch (err: any) {
      if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
        NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
        navigate('/');
      } else {
        NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
      }
    }
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <section className={styles.rightcontainer}>
      <AssetNavBar navTitle="Dashboard" />
      <div className={styles.cardssection}>
        <div className={styles.deviceCard}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices Listed</div>
              <div className={styles.deviceNumber}>{summary?.active}</div>
            </div>
            <i className="fa-solid fa-2xl fa-display"></i>
          </div>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices For Sale</div>
              <div className={styles.deviceNumber}>{summary?.lost}</div>
            </div>
            <i className="fa-regular fa-2xl fa-circle-dollar setcolor"></i>
          </div>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices Rented Out</div>
              <div className={styles.deviceNumber}>{summary?.rent}</div>
            </div>
            <i className="fa-sharp  fa-2xl  fa-regular fa-arrow-up-from-line setcolor"></i>
          </div>
        </div>
        <div className={styles.deviceCard2}>
          <div className={styles.frameParent}>
            <div className={styles.devicesListedParent}>
              <div className={styles.devicesListed}>Devices Lost</div>
              <div className={styles.deviceNumber}>{summary?.sale}</div>
            </div>
            <i className="fa-regular fa-lock-keyhole  fa-2xl  setcolor"></i>
          </div>
        </div>
      </div>
      <div className={styles.summarySection}>
        <div className={styles.priceBox}>
          <p>Total Device Value</p>
          <h3>R {totalAmount}</h3>
        </div>
        <div className={styles.chartDiv}>
          <div>
            <Doughnut data={data} />
          </div>
          <div className={styles.categorysection}>
            <div className={styles.cellphoneParent}>
              <AssetRegisteryChartComp percentage="30%" backgroundColor="#EC1A25" categoryTitle="Cell Phone" />
              <AssetRegisteryChartComp percentage="34%" backgroundColor="#F9B91B" categoryTitle="Camera" />
            </div>
            <div className={styles.cellphoneParent}>
              <AssetRegisteryChartComp percentage="6%" backgroundColor="#FF569A" categoryTitle="Screen" />
              <AssetRegisteryChartComp percentage="30%" backgroundColor="#252525" categoryTitle="Printer" />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AssetDashboardMain;