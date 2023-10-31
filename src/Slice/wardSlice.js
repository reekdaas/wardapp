import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWards = createAsyncThunk("ward/fetchWards", async () => {
  const response = await axios.get(
    "https://assignment21.rittikdaas.repl.co/ward"
  );
  const data = await response.data.wards;
  return data;
});

export const postWard = createAsyncThunk("wards/postWard", async (wardData) => {
  const response = await axios.post(
    "https://assignment21.rittikdaas.repl.co/ward",
    wardData
  );
  const data = await response.data.wards;
  return data;
});
export const editWard = createAsyncThunk(
  "ward/editWard",
  async (wardId, wardData) => {
    const response = await axios.post(
      `https://assignment21.rittikdaas.repl.co/ward/${wardId}`,
      wardData
    );
    const data = await response.data.wards;
    return data;
  }
);

export const deleteWards = createAsyncThunk(
  "ward/deleteWards",
  async (wardId) => {
    const response = await axios.delete(
      `https://assignment21.rittikdaas.repl.co/ward/${wardId}`
    );
    const data = await response.data.wards;
    return data;
  }
);

const initialWardState = {
  allWards: [],
  status: "idle",
  error: null,
};

export const wardSlice = createSlice({
  name: "wards",
  initialState: initialWardState,
  reducers: {},
  extraReducers: {
    [fetchWards.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchWards.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allWards = action.payload;
    },
    [fetchWards.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [postWard.pending]: (state, action) => {
      state.status = "pending";
    },
    [postWard.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allWards.push(action.payload);
    },
    [postWard.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [editWard.pending]: (state, action) => {
      state.status = "pending";
    },
    [editWard.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const currentWard = action.payload;
      const isWardPresent = state.allWards.findIndex(
        (ward) => ward._id === currentWard._id
      );
      if (isWardPresent !== -1) {
        state.allWards[isWardPresent] = currentWard;
      }
    },
    [editWard.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
    [deleteWards.pending]: (state, action) => {
      state.status = "pending";
    },
    [deleteWards.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const updatedWards = state.allWards.filter(
        (ward) => ward._id !== action.payload._id
      );
      state.allWards = updatedWards;
    },
    [deleteWards.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    },
  },
});

export default wardSlice.reducer;
