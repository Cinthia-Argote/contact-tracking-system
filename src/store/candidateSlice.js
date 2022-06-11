import { createSlice } from "@reduxjs/toolkit";

export const candidateSclice = createSlice({
  name: "candidate",
  initialState: {
    candidates: []
  },
  reducers: {
    candidateList: (state, action) => ({
      ...state,
      candidates: action.payload
    }),
  }
});

export const { candidateList } = candidateSclice.actions;
