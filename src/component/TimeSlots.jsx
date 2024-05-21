import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import DownIcon from "../assets/images/chevron-down.svg";
import {
  Divider,
  SelectContainer,
  SlotsContainer,
  SlotsDate,
  SlotsTimeContainer,
  SlotsTimerMain,
  TimeContainer,
  VariantsContainer,
} from "../styles/timeslot-styles";

const TimeSlots = ({ appointment, handleSelectTimeSlot, slotsByDate }) => {
  return (
    <TimeContainer>
      <VariantsContainer>
        <span>SELECT FROM VARAIANTS</span>
        <SelectContainer>
          <span>30 min</span>
          <img src={DownIcon} alt="" />
        </SelectContainer>
      </VariantsContainer>
      <Divider />
      <SlotsDate>
        <span>{appointment.selectedDate} - AVAILABLE SLOTS</span>
      </SlotsDate>
      <SlotsContainer>
        <>
          <SlotsTimerMain>
            {appointment.timeSlot?.isLoading ? (
              <b>Fetching available time slots...</b>
            ) : !slotsByDate || slotsByDate?.length === 0 ? (
              <span>No available slots for this date</span>
            ) : (
              slotsByDate?.map((slot, idx) => {
                return (
                  <SlotsTimeContainer
                    isSelected={slot === appointment.timeSlot.selectedTimeSlot}
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
      </SlotsContainer>
    </TimeContainer>
  );
};

export default TimeSlots;
