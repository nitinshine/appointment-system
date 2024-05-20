import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getFormattedDate } from "../services/utils";

const CalendarInput = ({ date, onDateChange }) => {
  const handleDateChange = (date) => {
    onDateChange(getFormattedDate(date));
  };

  return (
    <Calendar
      prev2Label={null}
      next2Label={null}
      onChange={handleDateChange}
      value={date}
    />
  );
};

export default CalendarInput;
