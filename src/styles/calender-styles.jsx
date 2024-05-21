import styled, { createGlobalStyle } from "styled-components";
import LeftImage from "../assets/images/left-img.png";
import RightImage from "../assets/images/right-img.png";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BackgroundBlurRight = styled.div`
  height: 300px;
  width: 300px;
  background-color: #378760;
  opacity: 0.3;
  border-radius: 50%;
  position: absolute;
  right: 200px;
  top: 0px;
  filter: blur(170px);
  z-index: -1;
`;

export const BackgroundBlurLeft = styled.div`
  height: 200px;
  width: 200px;
  background-color: #378760;
  opacity: 0.3;
  border-radius: 50%;
  position: absolute;
  bottom: 180px;
  left: 300px;
  filter: blur(100px);
  z-index: -1;
`;
export const LeftImageContainer = styled.div`
  width: 400px;
  height: 199.51px;
  background-image: url(${LeftImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  bottom: -3px;
  left: 150px;
`;

export const RightImageContainer = styled.div`
  width: 400px;
  height: 300.51px;
  background-image: url(${RightImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  bottom: 200px;
  right: 115px;

  @media (max-width: 990px) {
    max-width: 535px;
    height: unset;
  }
`;

export const Footer = styled.div`
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

  @media (max-width: 990px) {
    max-width: 464px;
  }
`;

export const NextButton = styled.button`
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

export const MainCalenderContainer = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    height: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const CalenderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 928px;
  height: 572px;

  @media (max-width: 990px) {
    max-width: 535px;
    height: unset;
  }
`;

export const MainCalender = styled.div`
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
  @media (max-width: 990px) {
    width: 87%;
    border-top-right-radius: 12px;
  }
`;

export const TitleContainer = styled.div`
  span {
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #555770;
  }
`;

export const CalendarWrapper = styled.div`
  borde-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    width: 87%;
    border-top-right-radius: 12px;
  }

  .react-calendar {
    border: none;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    width: 380px;
    height: 350px;
  }
  .react-calendar__tile {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    border: none;
    width: 52px;
    height: 30.33px;
    padding: 5px;
    border-radius: 99px;
  }

  .react-calendar__tile--active {
    background: #378760 !important;
    color: white !important;
    width: 52px;
    height: 30.33px;
    padding: 5px;
    border-radius: 99px;
  }
  .react-calendar__tile--now {
    width: 52px;
    height: 30.33px;
    padding: 5px;
    border-radius: 99px;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 14px;
    color: #378760;

    font-weight: 600;
    font-family: Poppins;
    text-transform: none;

    abbr {
      text-decoration: none !important;
    }
  }
  .react-calendar__tile--specific-date {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    text-align: left;
  }
  .react-calendar__month-view__days {
    height: 250px;
    padding: 10px;
  }
  .react-calendar__tile--hasActive {
    background: #378760 !important;
    color: white !important;
  }
  .react-calendar__navigation__label__labelText--from {
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }
  .react-calendar__navigation {
    align-items: center;
  }
  .react-calendar__month-view__weekdays {
    padding-left: 10px;
  }
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    height: 300px;
  }
  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade,
  .react-calendar__month-view__days__day {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
