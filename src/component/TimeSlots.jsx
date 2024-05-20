import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../services/utils";
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
  justify-content: ${({ isSelected }) =>
    isSelected ? "space-between" : "center"};
  align-items: center;
  cursor: pointer;
  border: 1px solid #378760;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  background-color: ${({ isSelected }) => (isSelected ? "#378760" : "white")};
  span {
    color: ${({ isSelected }) => (isSelected ? "white" : "#378760")};
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

const TimeSlots = ({ appointment, handleSelectTimeSlot, slotsByDate }) => {
  return (
    <TimeContainer>
      <VariantsContainer>
        <span>SELECT FROM VARAIANTS</span>
        <SelectContainer>
          <span>30 min</span>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </SelectContainer>
      </VariantsContainer>
      <Divider></Divider>
      <SlotsContainer>
        {appointment.timeSlot?.isLoading ? (
          <>
            <b>Fetching available time slots...</b>
          </>
        ) : (
          <>
            <span>
              {formatDate(appointment.selectedDate)} - AVAILABLE SLOTS
            </span>
            <SlotsTimerMain>
              {!slotsByDate || slotsByDate?.length === 0 ? (
                <span>No available slots for this date</span>
              ) : (
                slotsByDate?.map((slot, idx) => {
                  return (
                    <SlotsTimeContainer
                      isSelected={
                        slot === appointment.timeSlot.selectedTimeSlot
                      }
                      key={idx}
                      onClick={() => handleSelectTimeSlot(slot)}
                    >
                      <span>
                        {slot.start_time} - {slot.end_time}
                      </span>
                      {slot === appointment.timeSlot.selectedTimeSlot && (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{
                            color: "white",
                            height: "23px",
                            width: "23px",
                          }}
                        />
                      )}
                    </SlotsTimeContainer>
                  );
                })
              )}
            </SlotsTimerMain>
          </>
        )}
      </SlotsContainer>
    </TimeContainer>
  );
};

export default TimeSlots;
