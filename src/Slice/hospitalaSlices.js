import { createSlice } from "@reduxjs/toolkit";

const initialHospitalState = {
  totalPatients: 0,
  currentOccupancyRate: 0,
  topPerformingWards: "",
};
export const hospitalSlice = createSlice({
  name: "hospital",
  initialState: initialHospitalState,
  reducers: {
    updateHospitalStats: (state, action) => {
      const { totalPatients, currentOccupancyRate } = action.payload;
      state.totalPatients = totalPatients;
      state.currentOccupancyRate = currentOccupancyRate;
    },
    updatePerformingWards: (state, action) => {
      const { topPerformingWards } = action.payload;
      state.topPerformingWards = topPerformingWards;
    },
  },
});

export const { updateHospitalStats, updatePerformingWards } =
  hospitalSlice.actions;

export default hospitalSlice.reducer;
