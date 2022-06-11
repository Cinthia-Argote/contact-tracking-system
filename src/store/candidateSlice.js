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
    newCandidate: (state, action) => {
      const current = [...state.candidates];
      current.unshift(action.payload);
      return {
        ...state,
        candidates: current,
      }
    }
  }
});

export const { candidateList, newCandidate } = candidateSclice.actions;
