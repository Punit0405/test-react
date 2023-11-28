import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import event from "./event.js";
import { useRef, useState } from "react";
import styles from "./Booking.module.css";

import { OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

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

    const handleSelectSlot = ({ start, end }: any) => {
        console.log(start, "=====================", end);

        setTooltipState((prevTooltipState: any) => ({
            ...prevTooltipState,
            selectedSlot: !prevTooltipState.selectedSlot,
        }));
    };

    const handleEventClick = (event: any) => {
        console.log(tooltipState, "=========tooltipState=======");
        console.log(event);

        setTooltipState((prevTooltipState: any) => ({
            ...prevTooltipState,
            [event.id]: !prevTooltipState[event.id],
        }));
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
            <div className={styles.dashboard}>Calendar</div>
            <Calendar
                className="my-4"
                localizer={localizer}
                components={{
                    toolbar: CustomHeader,
                    eventWrapper: EventWithPopover,
                }}
                events={event}
                eventPropGetter={eventStyleGetter}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 700 }}
                selectable={true} // Allow selecting slots
                onSelectSlot={handleSelectSlot} // Handle slot selection
                onSelectEvent={handleEventClick}
            />
        </>
    );
}
