import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Style from './calender.module.css';
import { CalendarIcon } from './calendarIcon';

export const Calender = ({ paymentDates }: any) => {

    const [selectedDate, setSelectedDate]: any = useState({
        dateFormat: '',
        receipt: ''
    });

    const handleDateChange: any = (name: any, date: any) => {
        setSelectedDate({ ...selectedDate, [name]: date });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '40vw' }}>
            {
                paymentDates.map((item: any) => {
                    return (
                        <div className={Style["date-picker-input"]}>
                            <ReactDatePicker
                                name={item?.name}
                                selected={selectedDate[item?.name]}
                                onChange={(date) => handleDateChange(item?.name, date)}
                                dateFormat="dd MMMM yyyy"
                                placeholderText={item?.placeholder}
                                className={Style["calendar-input"]} // Apply the CSS class to the DatePicker component
                                showYearDropdown
                                scrollableYearDropdown
                            />
                            <CalendarIcon />
                        </div>

                    )
                })
            }
        </div>
    );
}
