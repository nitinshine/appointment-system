import { useDispatch, useSelector } from "react-redux";
import {
  fetchTimeSlots,
  setSelectedDate,
  setSelectedTimeSlot,
} from "../../redux/slice/appointmentSlice";
import { useEffect } from "react";
import CalendarInput from "./CalendarInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeSlots from "./TimeSlots";
import {
  BackgroundBlurLeft,
  BackgroundBlurRight,
  CalenderContainer,
  Footer,
  GlobalStyle,
  LeftImageContainer,
  MainCalender,
  MainCalenderContainer,
  MainContainer,
  NextButton,
  RightImageContainer,
  TitleContainer,
} from "../styles/calender-styles";
import ArrowRight from "../assets/images/chevron-right.svg";

const Calender = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment);

  const slotsByDate = appointment.timeSlot?.data?.find(
    (slot) => slot.date === appointment.selectedDate
  )?.slots;

  useEffect(() => {
    if (!slotsByDate) dispatch(fetchTimeSlots(appointment.selectedDate));
  }, [appointment.selectedDate]);

  const handleChangeDate = (date) => {
    dispatch(setSelectedDate(date));
  };

  const handleSelectTimeSlot = (slot) => {
    dispatch(setSelectedTimeSlot(slot));
  };

  const handleBookAppointment = () => {
    toast("Appointment booked successfully", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      type: "success",
    });
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <BackgroundBlurLeft />
        <BackgroundBlurRight />
        <LeftImageContainer />
        <RightImageContainer />
        <CalenderContainer>
          <MainCalenderContainer>
            <MainCalender>
              <TitleContainer>
                <div>Test Services</div>
                <span>Timezone: Asia/Calcutta</span>
                <CalendarInput
                  onDateChange={handleChangeDate}
                  date={new Date(appointment.selectedDate)}
                />
              </TitleContainer>
            </MainCalender>
            <TimeSlots
              appointment={appointment}
              handleSelectTimeSlot={handleSelectTimeSlot}
              slotsByDate={slotsByDate}
            />
          </MainCalenderContainer>
          <Footer>
            <span>POWERED BY APPOINTO</span>
            <NextButton
              disabled={!appointment.timeSlot.selectedTimeSlot}
              onClick={handleBookAppointment}
            >
              Next &nbsp;
              <img src={ArrowRight} alt="" />
            </NextButton>
          </Footer>
        </CalenderContainer>
      </MainContainer>
      <ToastContainer />
    </>
  );
};

export default Calender;
