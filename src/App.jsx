import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTimeSlots,
  setSelectedDate,
} from "../redux/slice/appointmentSlice";
import Calender from "./component/calender";

const App = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);

  useEffect(() => {
    dispatch(fetchTimeSlots());
  }, []);

  const handleSelectDate = (date) => {
    console.log(date);
    dispatch(setSelectedDate(date));
  };

  return (
    <>
      {appointment.timeSlot?.isLoading && (
        <>
          <b>Fetching available time slots...</b>
        </>
      )}
      <div>Selected date from the calendar: {appointment.selectedDate}</div>
      <Calender />
      {appointment.timeSlot.data?.map((i, idx) => {
        return (
          <div key={idx}>
            <span onClick={() => handleSelectDate(i.date)}>Date: {i.date}</span>
            <span>Slots:</span>
            {i.slots.map((slot, index) => {
              return (
                <li key={index}>
                  Start time: {slot.start_time} End time: {slot.end_time}
                </li>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default App;
