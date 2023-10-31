import { configureStore } from "@reduxjs/toolkit";
import { patientSlice } from "../Slice/patientSlice";
import { wardSlice } from "../Slice/wardSlice";
import { hospitalSlice } from "../Slice/hospitalaSlices";

export default configureStore({
  reducer: {
    patients: patientSlice.reducer,
    wards: wardSlice.reducer,
    hospitals: hospitalSlice.reducer,
  },
});
