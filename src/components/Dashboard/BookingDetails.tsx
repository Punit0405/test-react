import styles from "../../pages/Dashboard.module.css";
import GoogleMapReact from 'google-map-react';
import { width } from "@mui/system";
import { Button } from "react-bootstrap";

const BookingDetails = (props:any) => {
    const {booking,setBooking} = props;
    const AnyReactComponent = ({text}:any) => <div><i style={{ margin: "0% 0%"}} className="fa-solid fa-location-dot fa-2xl setcolor"></i>{text}</div>
    const defaultProps = {
        center: {
          lat: 22.9952744,
          lng: 72.6194319
        },
        zoom: 16
      };
    return (
        <section className={styles.upcomingBookingsMainDiv}>
            <div className={styles.upcomingBookingsTitle}>Upcoming Bookings Details</div>
            <div className={styles.customerDetails}>
                <div className={styles.customerImgInfoDiv}>
                    <img src="https://admin.snape.app/sa/clientImg/1679750612556_7cdfa083-a3a4-45f5-9f57-80a4a2207f30_progress_image_14.webp" className={styles.upcomingBookingImg} height={100} width={100} alt="" />
                    <div className={styles.customerInfo}>
                        <p className={styles.customerName}>Kate Madix</p>
                        <p className={styles.customerPhotoShootP}>Sports Photography</p>
                    </div>
                </div>
                <div>
                    <h4>R 1500</h4>
                    <p className={styles.customerPhotoShootP}>3 Hours</p>
                </div>
            </div>
            <div className={styles.bookingDateTimeDiv}>
                <i className="fa-solid fa-clock"></i>
                <span className={styles.bookingDateTimeP}>Sun,October 13th at 9:00AM</span>
            </div>
            <div className={styles.bookingAddreessMainDiv}>
                <div className={styles.bookingAddreessHeaderDiv}>
                    <i style={{ margin: "0% 0%" }} className="fa-solid fa-location-dot fa-2xl setcolor"></i>
                    <h6>Booking Address</h6>

                </div>
                <div className={styles.bookingAddressDetailDiv}>
                    <p>60 Crescent road, Bramley View Johannesburg, 2090</p>
                </div>
                <div className={styles.bookingAddressMapDiv}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDHF0s5msU1ffUR_JqjAnC90mYMAxkDfE4" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={22.9952744}
                            lng={72.6194319}
                            text="Location"
                        />
                    </GoogleMapReact>
                </div>
            </div>

            <div className={styles.closeBookingDetailsMainDiv}>
                <span>Further Actions Can Done On App</span>
                <Button className={styles.closeDetailsBtn} onClick={(e)=>setBooking(0)}>Close Details</Button>
            </div>



        </section>
    )
}

export default BookingDetails