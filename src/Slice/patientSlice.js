import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPatients = createAsyncThunk(
  "patients/fetchPatients",
  async () => {
    const response = await axios.get(
      "https://assignment21.rittikdaas.repl.co/patient"
    );
    const patientData = await response.data.patient;
    console.log(patientData);
    return patientData;
  }
);

export const postPatients = createAsyncThunk(
  "patients/postPatients",
  async (patientData) => {
    const response = await axios.post(
      "https://assignment21.rittikdaas.repl.co/patient",
      patientData
    );
    const data = await response.data.patient;
    return data;
  }
);

// export const fetchParticularPatients = createAsyncThunk(
//   "patients/fetchParticularPatients",
//   async (patientID) => {
//     const response = await axios.get(
//       `https://assignment21.rittikdaas.repl.co/patient/${patientID}`
//     );
//     const data = await response.data.patient;
//     return data;
//   }
// );

export const editPatients = createAsyncThunk(
  "patients/editPatients",
  async ({ patientId, patientData }) => {
    const response = await axios.post(
      `https://assignment21.rittikdaas.repl.co/patient/${patientId}`,
      patientData
    );
    const data = await response.data.patient;
    return data;
  }
);

export const deletePatients = createAsyncThunk(
  "patients/deletePatients",
  async (patientId) => {
    const response = await axios.delete(
      `https://assignment21.rittikdaas.repl.co/patient/${patientId}`
    );
    const data = await response.data.patient;
    return data;
  }
);

const initialPatientState = {
  allPatients: [],
  error: null,
  status: "idle",
};

export const patientSlice = createSlice({
  name: "patients",
  initialState: initialPatientState,
  reducers: {},
  extraReducers: {
    [fetchPatients.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchPatients.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPatients = action.payload;
    },
    [fetchPatients.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [postPatients.pending]: (state, action) => {
      state.status = "pending";
    },
    [postPatients.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPatients.push(action.payload);
    },
    [postPatients.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [editPatients.pending]: (state, action) => {
      state.status = "pending";
    },
    [editPatients.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const updatedPatientId = action.payload;
      const patientIndex = state.allPatients.findIndex(
        (patient) => patient._id === updatedPatientId._id
      );
      if (patientIndex !== -1) {
        state.allPatients[patientIndex] = action.payload;
      }
    },
    [editPatients.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [deletePatients.pending]: (state, action) => {
      state.status = "pending";
    },
    [deletePatients.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const updatedPatient = state.allPatients.filter(
        (patient) => patient._id !== action.payload._id
      );
      state.allPatients = updatedPatient;
    },
    [deletePatients.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default patientSlice.reducer;
