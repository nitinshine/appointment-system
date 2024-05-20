import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTimeSlots } from "../../src/services/api/calendar";
import { getCurrentDate } from "../../src/services/utils";

const timeSlotsSlice = createSlice({
  name: "appointment",
  initialState: {
    timeSlot: {
      data: [],
      isError: false,
      selectedTimeSlot: null,
      isLoading: false,
    },
    selectedDate: getCurrentDate(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedTimeSlot: (state, action) => {
      state.timeSlot.selectedTimeSlot = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTimeSlots.pending, (state) => {
      state.timeSlot.isLoading = true;
    });
    builder.addCase(fetchTimeSlots.fulfilled, (state, action) => {
      state.timeSlot.isLoading = false;
      state.timeSlot.data = action.payload;
    });
    builder.addCase(fetchTimeSlots.rejected, (state) => {
      state.timeSlot.isLoading = false;
      state.timeSlot.isError = true;
    });
  },
});

export const fetchTimeSlots = createAsyncThunk("fetchTimeSlots", async () => {
  const res = await getTimeSlots();
  return res;
});

export const { setSelectedDate, setSelectedTimeSlot } = timeSlotsSlice.actions;

export default timeSlotsSlice.reducer;
