import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getFormattedDate } from "../services/utils";
import { CalendarWrapper } from "../styles/calender-styles";

const CalendarInput = ({ date, onDateChange }) => {
  const handleDateChange = (date) => {
    onDateChange(getFormattedDate(date));
  };

  return (
    <CalendarWrapper>
      <Calendar
        prev2Label={null}
        next2Label={null}
        onChange={handleDateChange}
        value={date}
      />
    </CalendarWrapper>
  );
};

export default CalendarInput;
