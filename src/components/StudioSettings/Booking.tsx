import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import event from "./event.js";
import { useEffect, useRef, useState } from "react";
import styles from "./Booking.module.css";

import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import AddNewBooking from "../Modal/AddNewBooking";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";
import TemplateLoader from "../Loader/TemplateLoader";
import UpdateBooking from "../Modal/UpdateBooking";

const localizer = momentLocalizer(moment);

const CustomHeader = ({ label, onNavigate, onView }: any) => {
    const handleTodayClick = () => {
        const now = new Date();
        onNavigate("TODAY", now);
    };

    const handlePrevClick = () => {
        onNavigate("PREV");
    };

    const handleNextClick = () => {
        onNavigate("NEXT");
    };

    const handleViewChange = (view: any) => {
        onView(view);
    };

    return (
        <div>
            <div>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <button
                        className={styles.dayButton}
                        onClick={() => handleViewChange("day")}
                    >
                        Day
                    </button>
                    <button
                        className={styles.dayButton}
                        onClick={() => handleViewChange("week")}
                    >
                        Week
                    </button>
                    <button
                        className={styles.dayButton}
                        onClick={() => handleViewChange("month")}
                    >
                        Month
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between my-4 align-items-center">
                <span className={styles.monthDetails}>{label}</span>
                <div>
                    <button onClick={handleTodayClick} className="d-none">
                        Today
                    </button>
                    <button
                        onClick={handlePrevClick}
                        className={styles.arrowButton}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={handleNextClick}
                        className={styles.arrowButton}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

const eventStyleGetter = (
    event: any,
    start: any,
    end: any,
    isSelected: any
) => {
    const backgroundColor = "#4286f4";
    const style = {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
    };

    return {
        style,
    };
};

export default function Booking() {
    const [tooltipState, setTooltipState]: any = useState({});
    const [modalShow, setShow] = useState(false);
    const [modalUpdateShow, setUpdateShow] = useState(false);
    const [client, setClient] = useState([]);
    const [booking, setBooking] = useState([]);
    const [loader, setLoader] = useState(true);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const getClientList = async (search?: any) => {
        try {
            const clientRes = await StudioClientSevice.getCientList(search);
            const bookingRes = await StudioClientSevice.getBooking();
            if (
                clientRes &&
                clientRes?.code === STATUS_CODE.SUCCESS &&
                bookingRes &&
                bookingRes?.code === STATUS_CODE.SUCCESS
            ) {
                setLoader(false);
                setClient(clientRes?.result);
                setBooking(
                    bookingRes?.result?.data?.booking.map((booking: any) => ({
                        ...booking,
                        start: new Date(booking?.startDate),
                        end: new Date(booking?.endDate),
                    }))
                );
                setTooltipState(bookingRes?.result);
            } else {
                setLoader(false);
                setClient(clientRes?.result);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    const getBooking = async () => {
        try {
            const bookingRes = await StudioClientSevice.getBooking();
            if (bookingRes && bookingRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setBooking(
                    bookingRes?.result?.data?.booking.map((booking: any) => ({
                        ...booking,
                        start: new Date(booking?.startDate),
                        end: new Date(booking?.endDate),
                    }))
                );
                setTooltipState(bookingRes?.result);
            } else {
                setLoader(false);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    useEffect(() => {
        getClientList();
    }, []);

    const handleSelectSlot = ({ start, end }: any) => {
        const startDate = moment(start).format("YYYY-MM-DDTHH:mm:ss");
        const endDate = moment(end).format("YYYY-MM-DDTHH:mm:ss");

        setStartTime(startDate);
        setEndTime(endDate);

        setShow(true);
    };

    const handleEventClick = ({ start, end, title, description, id }: any) => {
        const startDate = moment(start).format("YYYY-MM-DDTHH:mm:ss");
        const endDate = moment(end).format("YYYY-MM-DDTHH:mm:ss");

        setTitle(title);
        setDescription(description);
        setId(id);

        setStartTime(startDate);
        setEndTime(endDate);

        setUpdateShow(true);
    };
    const EventWithPopover = ({ event, children }: any) => {
        const [showPopover, setShowPopover] = useState(false);

        const handlePopoverClick = (e: any) => {
            e.preventDefault();
            setShowPopover(!showPopover);
        };

        return (
            <OverlayTrigger
                trigger="click"
                placement="left" // Adjust placement as needed
                show={showPopover}
                overlay={
                    <Popover
                        id={`popover-${event.id}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Popover.Header as="h3">{event.title}</Popover.Header>
                        <Popover.Body>
                            <p>{event.description}</p>
                            <button onClick={handlePopoverClick}>Close</button>
                        </Popover.Body>
                    </Popover>
                }
            >
                <div
                    className="rbc-event"
                    style={{
                        backgroundColor: "none",
                        border: "none",
                        padding: "2px",
                    }}
                    onClick={handlePopoverClick}
                >
                    {event.title}
                </div>
            </OverlayTrigger>
        );
    };

    return (
        <>
            {loader ? (
                <TemplateLoader />
            ) : (
                <>
                    <div className={styles.dashboard}>Calendar</div>
                    <Calendar
                        className="my-4"
                        localizer={localizer}
                        components={{
                            toolbar: CustomHeader,
                        }}
                        events={booking}
                        // events={event}
                        eventPropGetter={eventStyleGetter}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 700 }}
                        selectable={true} // Allow selecting slots
                        onSelectSlot={handleSelectSlot} // Handle slot selection
                        onSelectEvent={handleEventClick}
                    />
                    <AddNewBooking
                        show={modalShow}
                        client={client}
                        onHide={() => setShow(false)}
                        startTime={startTime}
                        endTime={endTime}
                        getBooking={getBooking}
                    />
                    <UpdateBooking
                        show={modalUpdateShow}
                        client={client}
                        onHide={() => setUpdateShow(false)}
                        startTime={startTime}
                        endTime={endTime}
                        getBooking={getBooking}
                        title={title}
                        description={description}
                        id={id}
                    />
                </>
            )}
        </>
    );
}
