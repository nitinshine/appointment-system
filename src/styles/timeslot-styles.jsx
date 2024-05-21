import styled from "styled-components";

export const TimeContainer = styled.div`
  height: 494px;
  width: 464px;
  padding: 40px;
  border-top-right-radius: 12px;
  background-color: white;
`;

export const VariantsContainer = styled.div`
  width: 384px;
  height: 75px;
  span {
    color: #555770;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0.25px;
    text-align: left;
    display: flex;
  }
`;

export const SelectContainer = styled.div`
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

export const Divider = styled.div`
  width: 384px;
  height: 1px;
  margin-top: 20px;
  background-color: #c7c9d9;
`;

export const SlotsContainer = styled.div`
  width: 411px;
  height: 230px;
  overflow: auto;

  span {
    color: #555770;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
  }
`;

export const SlotsTimeContainer = styled.div`
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

export const SlotsTimerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  max-height: 338px;
  height: 100%;
  width: 384px;
`;

export const SlotsDate = styled.div`
  margin-top: 15px;
  span {
    color: #555770;
    font-size: 12px;
    font-weight: 600;
    line-height: 31px;
    display: flex;
  }
`;
