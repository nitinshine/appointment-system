import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackgroundBlur = styled.div`
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

const NextButton = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: white;
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
  width: 464px;
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

const TitleContainer = styled.div``;

const TimeContainer = styled.div`
  height: 494px;
  width: 464px;
  padding: 40px;
  border-top-right-radius: 12px;
  background-color: white;
`;
const VariantsContainer = styled.div`
  width: 384px;
  height: 75px;
  span {
    color: #555770;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0.25px;
    text-align: left;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 8px 12px;
  background-color: #fafafc;
  border: 1px solid #c7c9d9;
  border-radius: 10px;

  span {
    color: #378760;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Divider = styled.div`
  width: 384px;
  height: 1px;
  margin-top: 26px;
  background-color: #c7c9d9;
`;

const SlotsContainer = styled.div`
  width: 384px;
  height: 264px;
  margin-top: 20px;

  span {
    color: #555770;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
  }
`;
const SlotsTimeContainer = styled.div`
  height: 48px;
  width: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #378760;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  span {
    color: #378760;
    font-size: 14px;
    font-weight: 600;
  }
`;
const SlotsTimeContainerNew = styled.div`
  height: 48px;
  width: 384px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #378760;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  background-color: #378760;
  span {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }
`;

const SlotsTimerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Calender = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <BackgroundBlur></BackgroundBlur>
        <CalenderContainer>
          <MainCalenderContainer>
            <MainCalender>
              <TitleContainer>
                <div>Test Services</div>
              </TitleContainer>
            </MainCalender>
            <TimeContainer>
              <VariantsContainer>
                <span>SELECT FROM VARAIANTS</span>
                <SelectContainer>
                  <span>30 min</span>
                </SelectContainer>
              </VariantsContainer>
              <Divider></Divider>
              <SlotsContainer>
                <span>THURSDAY, DEC 2 - AVAILABLE SLOTS</span>
                <SlotsTimerMain>
                  <SlotsTimeContainer>
                    <span>03:30 AM - 04:00 AM</span>
                  </SlotsTimeContainer>
                  <SlotsTimeContainerNew>
                    <span>04:00 AM - 04:30 AM</span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      style={{ color: "white", height: "23px", width: "23px" }}
                    />
                  </SlotsTimeContainerNew>
                  <SlotsTimeContainer>
                    <span>04:30 AM - 05:00 AM</span>
                  </SlotsTimeContainer>
                  <SlotsTimeContainer>
                    <span>05:00 AM - 05:30 AM</span>
                  </SlotsTimeContainer>
                </SlotsTimerMain>
              </SlotsContainer>
            </TimeContainer>
          </MainCalenderContainer>
          <Footer>
            <span>POWERED BY APPOINTO</span>

            <NextButton>Next</NextButton>
          </Footer>
        </CalenderContainer>
      </MainContainer>
    </>
  );
};

export default Calender;