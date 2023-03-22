import { FunctionComponent, useState } from "react";
import { Button, Container, Image, Row, Col, Nav, NavItem, Ratio } from "react-bootstrap";
import PhotographyCard from "../components/Dashboard/PhotographyCard";
import NavLayout from "../components/Layout";
import styles from "./Dashboard.module.css";
import Calender from "react-calendar";
import './Calender.css'
import CardComponent from "../components/Dashboard/CardComponent";
import Constants from "../Config/Constants";
import Layout from "../components/Layout";
import moment from "moment";
const Dashboard: FunctionComponent = () => {
  const [date, setDate] = useState(new Date());
  const todayDate = new Date();
  console.log(todayDate , 'sdafasf')
  const varial = "hello"
  return (
    <Layout>
      <>
        <div className={styles.bottomsection} id="bottomSection">
          <section className={styles.leftcontainer}>
            <div className={styles.cardsParent}>
              <div className={styles.cards}>
                <div className={styles.clientsParent}>
                <Ratio aspectRatio="1x1">
                  <CardComponent classname="clients" topTitle="Clients" middleTitle="4" bottomTitle="Last 7 days" backgroudBox="../rectangle-52.svg" iconImage="../h38ch38bm0014iconset011-1.svg" />
                 </Ratio>
                 <Ratio aspectRatio="1x1">
                  <CardComponent classname="photography" topTitle="Photography" middleTitle="4" bottomTitle="Last 7 days" backgroudBox="../cameraiconbg.svg" iconImage="../cameraicon.svg" />
                  </Ratio>
                </div>
                <div className={styles.clientsParent}>
                <Ratio aspectRatio="1x1">
                  <CardComponent classname="videography" topTitle="Videography" middleTitle="4" bottomTitle="Last 7 days" backgroudBox="../videoiconbg.svg" iconImage="../videoicon.svg" />
                  </Ratio>
                  <Ratio aspectRatio="1x1">
                  <CardComponent classname="revenue" topTitle="Revenue" middleTitle="4" bottomTitle="Last 7 days" backgroudBox="../moneybankbg.svg" iconImage="../moneybank.svg" />
                  </Ratio>
                </div>
              </div>
              <div className={styles.recentCustomersParent}>
                <h3 className={styles.recentCustomers}>Recent Customers</h3>
                <div className={styles.recentCustomersGrid}>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>
                  <div className={styles.recentCustomerDiv}>
                    <div className={styles.recentCustomersImgDiv}>
                      <img
                        className={styles.recentCustomersImg}
                        alt=""
                        src="../mask-group1@2x.png"
                      />
                    </div>

                    <div className={styles.recentCustomerNameDiv}>
                      <div className={styles.recentCustomerName}>Arumi Nelson</div>
                      <div className={styles.recentCustomerTime}>08.00 - 08.30 am</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>
          <section className={styles.rightcontainer}>
            <div className={styles.upcomingBookingsTitle}>Upcoming Bookings</div>
            <div className={styles.calenderDiv}>
              <Calender onChange={setDate} value={date} minDate={todayDate} />

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
                    150 Customers
                  </button>
                </div>
                <div className={styles.totalCustomers}>
                  <div className={styles.customerBox}>
                    <div className={styles.customerLeftDiv}>
                      <img
                        className={styles.customerImage}
                        alt=""
                        src="../mask-group4@2x.png"
                      />
                      <div className={styles.customerData}>
                        <div className={styles.customerName}>
                          Arumi Nelson
                        </div>
                        <div className={styles.customerTime}>08.00 - 08.30 am</div>
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

                  <div className={styles.customerBox}>
                    <div className={styles.customerLeftDiv}>
                      <img
                        className={styles.customerImage}
                        alt=""
                        src="../mask-group4@2x.png"
                      />
                      <div className={styles.customerData}>
                        <div className={styles.customerName}>
                          Arumi Nelson
                        </div>
                        <div className={styles.customerTime}>08.00 - 08.30 am</div>
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
                  <div className={styles.customerBox}>
                    <div className={styles.customerLeftDiv}>
                      <img
                        className={styles.customerImage}
                        alt=""
                        src="../mask-group4@2x.png"
                      />
                      <div className={styles.customerData}>
                        <div className={styles.customerName}>
                          Arumi Nelson
                        </div>
                        <div className={styles.customerTime}>08.00 - 08.30 am</div>
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
                  <div className={styles.customerBox}>
                    <div className={styles.customerLeftDiv}>
                      <img
                        className={styles.customerImage}
                        alt=""
                        src="../mask-group4@2x.png"
                      />
                      <div className={styles.customerData}>
                        <div className={styles.customerName}>
                          Arumi Nelson
                        </div>
                        <div className={styles.customerTime}>08.00 - 08.30 am</div>
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
