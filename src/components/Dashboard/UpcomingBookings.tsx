import React from 'react';
import styles from "../../pages/Dashboard.module.css";
import Moment from "react-moment";
import moment from 'moment'

const UpcomingBookings = (props: any) => {
    const { upcoming } = props;
    return (
        <>
            {
                upcoming?.length ?
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
        </>
    )
}

export default UpcomingBookings