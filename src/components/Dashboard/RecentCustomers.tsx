import React from 'react';
import styles from "../../pages/Dashboard.module.css";
import Moment from "react-moment";
import moment from 'moment'

const RecentCustomers = (props:any) => {
    const {recent} = props;
  return (
    <>
    {
                  recent && recent.length ?
                    recent.map((customer: any, index:any) => (
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
    </>
  )
}

export default RecentCustomers