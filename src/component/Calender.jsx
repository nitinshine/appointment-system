import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTimeSlots,
  setSelectedDate,
  setSelectedTimeSlot,
} from "../../redux/slice/appointmentSlice";
import { useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CalendarInput from "./CalendarInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeSlots from "./TimeSlots";
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackgroundBlurRight = styled.div`
  height: 300px;
  width: 300px;
  background-color: #378760;
  opacity: 0.3;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  filter: blur(180px);
  z-index: -1;
`;

const BackgroundBlurLeft = styled.div`
  height: 200px;
  width: 200px;
  background-color: #378760;
  opacity: 0.3;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 100px;
  filter: blur(100px);
  z-index: -1;
`;

// const LeftImage = styled.div`
//   width: 300px;
//   height: 199.51px;
//   background-image: url(${SideImage});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;
const CalenderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 928px;
  height: 572px;
`;

const Footer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #378760;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 15px 30px 15px 30px;

  span {
    color: white;
    font-size: 12px;
    font-weight: 600;
  }
`;

const NextButton = styled.button`
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  span {
    width: 5px;
    height: 10px;
    color: #378760;
    margin-bottom: 7px;
  }
`;

const MainCalenderContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCalender = styled.div`
  height: 494px;
  width: 100%;
  background-color: #ebebf0;
  border-top-left-radius: 12px;
  padding: 40px;
  div {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.25px;
    text-align: left;
  }
`;

const TitleContainer = styled.div`
  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #555770;
  }
`;

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
        <BackgroundBlurLeft></BackgroundBlurLeft>
        <BackgroundBlurRight></BackgroundBlurRight>
        {/* <LeftImage></LeftImage> */}
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
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </NextButton>
          </Footer>
        </CalenderContainer>
      </MainContainer>
      <ToastContainer />
    </>
  );
};

export default Calender;
