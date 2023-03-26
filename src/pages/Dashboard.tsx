import { FunctionComponent, useState, useEffect } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import Calender from "react-calendar";
import { useNavigate } from "react-router-dom";
import './Calender.css'
import CardComponent from "../components/Dashboard/CardComponent";
import Layout from "../components/Layout";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../Utils/constants";
import { NotificationWithIcon } from "../Utils/helper";
import DashboardService from "../api/Dashboard/dashboard";
import Moment from "react-moment";
import moment from 'moment'
const Dashboard: FunctionComponent = () => {

  const navigate = useNavigate();

  useEffect(() => {
    getDashboardData();
  }, [])

  const [summary, setSummary] = useState({
    "clients": 0,
    "photoGraphy": 0,
    "videoGraphy": 0,
    "revenue": 0,
    "code": 0,
    "data": {}
  })
  const [recent, setRecent] = useState([])
  const [upcoming, setUpcoming] = useState([])

  async function getDashboardData() {
    try {
      DashboardService.getSummary().then((res: any) => {
        if (res && res?.code === STATUS_CODE.SUCCESS) {
          setSummary(res?.result)
        }
      })
      DashboardService.getRecentCustomer().then((recentRes: any) => {
        if (recentRes && recentRes?.code === STATUS_CODE.SUCCESS) {
          setRecent(recentRes?.result?.recentCustomers)
        }
      })
      const currentDate = moment().format("YYYY-MM-DD")

      DashboardService.getUpComingBookings(currentDate).then((upcomingRes: any) => {
        if (upcomingRes && upcomingRes?.code === STATUS_CODE.SUCCESS) {
          setUpcoming(upcomingRes?.result?.recentCustomers)
        }
      })
    } catch (err: any) {
      if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
        NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
        navigate('/');
      } else {
        NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
      }
    }
  }

  const handleDateChange = async (changeDate: any) => {
    setDate(changeDate)
    const viewDate = moment(changeDate).format("YYYY-MM-DD")
    DashboardService.getUpComingBookings(viewDate).then((upcomingRes: any) => {
      if (upcomingRes && upcomingRes?.code === STATUS_CODE.SUCCESS) {
        setUpcoming(upcomingRes?.result?.recentCustomers)
      }
    })
  }

  const [date, setDate] = useState(new Date());
  const todayDate = new Date();
  return (
    <Layout>
      <>
        <div className={styles.bottomsection} id="bottomSection">
          <section className={styles.leftcontainer}>
            <div className={styles.cardsParent}>
              <div className={styles.cards}>
                <div className={styles.clientsParent}>
                  <Ratio aspectRatio="1x1">
                    <CardComponent classname="clients" topTitle="Clients" middleTitle={summary.clients} bottomTitle="Last 7 days" backgroudBox="../rectangle-52.svg" iconImage="../h38ch38bm0014iconset011-1.svg" />
                  </Ratio>
                  <Ratio aspectRatio="1x1">
                    <CardComponent classname="photography" topTitle="Photography" middleTitle={summary.photoGraphy} bottomTitle="Last 7 days" backgroudBox="../cameraiconbg.svg" iconImage="../cameraicon.svg" />
                  </Ratio>
                </div>
                <div className={styles.clientsParent}>
                  <Ratio aspectRatio="1x1">
                    <CardComponent classname="videography" topTitle="Videography" middleTitle={summary.videoGraphy} bottomTitle="Last 7 days" backgroudBox="../videoiconbg.svg" iconImage="../videoicon.svg" />
                  </Ratio>
                  <Ratio aspectRatio="1x1">
                    <CardComponent classname="revenue" topTitle="Revenue" middleTitle={summary.revenue} bottomTitle="Last 7 days" backgroudBox="../moneybankbg.svg" iconImage="../moneybank.svg" />
                  </Ratio>
                </div>
              </div>
              <div className={styles.recentCustomersParent}>
                <h3 className={styles.recentCustomers}>Recent Customers</h3>
                {
                  recent && recent.length ?
                    recent.map((customer: any, index) => (
                      <div className={styles.recentCustomersGrid} key={index}>
                        <div className={styles.recentCustomerDiv}>
                          <div className={styles.recentCustomersImgDiv}>
                            <img
                              className={styles.recentCustomersImg}
                              alt=""
                              src="../mask-group1@2x.png"
                            />
                          </div>

                          <div className={styles.recentCustomerNameDiv}>
                            <div className={styles.recentCustomerName}>{customer?.clientfirstName} {customer?.clientLastName}</div>
                            <div className={styles.recentCustomerTime}>
                              <Moment format="hh:mm A">{customer?.bookingStartTime}</Moment>
                              -
                              <Moment format="hh:mm A">{moment(customer?.bookingStartTime).add(customer?.session, 'h')}</Moment>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) :
                    <div>
                      No Recent Customer Found
                    </div>
                }
              </div>
            </div>
          </section>
          <section className={styles.rightcontainer}>
            <div className={styles.upcomingBookingsTitle}>Upcoming Bookings</div>
            <div className={styles.calenderDiv}>
              <Calender onChange={handleDateChange} value={date} minDate={todayDate} />

            </div>
            <div className={styles.rightcontainerInner}>

              {/* <div className={styles.upcomingBookingsParent}>
                <div className={styles.upcomingBookings}>Upcoming Bookings</div>
              </div> */}
              <div className={styles.frameParent1}>
                <div className={styles.monday16Sept2021Parent}>
                  <div className={styles.monday16Sept}>
                    {date.toDateString()}
                  </div>
                  <button className={styles.cutomersButton}>
                    {upcoming.length} customers
                  </button>
                </div>
                <div className={styles.totalCustomers}>
                  {
                    upcoming && upcoming.length ?
                      upcoming.map((customer: any) => (
                        <div className={styles.customerBox}>
                          <div className={styles.customerLeftDiv}>
                            <img
                              className={styles.customerImage}
                              alt=""
                              src="../mask-group4@2x.png"
                            />
                            <div className={styles.customerData}>
                              <div className={styles.customerName}>
                                {customer.clientfirstName} {customer.clientLastName}
                              </div>
                              <div className={styles.customerTime}>
                                <Moment format="hh:mm A">{customer?.bookingStartTime}</Moment>
                                -
                                <Moment format="hh:mm A">{moment(customer?.bookingStartTime).add(customer?.session, 'h')}</Moment>
                              </div>
                            </div>

                          </div>
                          <div className={styles.rightCustomerImage}>
                            <img
                              className={styles.groupIcon}
                              alt=""
                              src="../group-103.svg"
                            />
                          </div>
                        </div>
                      )) :
                      <div className={styles.nobooking}>
                        No Bookings Found
                      </div>
                  }
                </div>
              </div>

            </div>
          </section>
        </div>
      </>
    </Layout>

  );
};

export default Dashboard;
