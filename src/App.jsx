import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTimeSlots,
  setSelectedDate,
} from "../redux/slice/appointmentSlice";
import Calender from "./component/calender";

const App = () => {
  return (
    <>
      <Calender />
    </>
  );
};

export default App;
