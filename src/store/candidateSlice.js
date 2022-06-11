import { createSlice } from "@reduxjs/toolkit";

export const candidateSclice = createSlice({
  name: "candidate",
  initialState: {
    candidates: [],
    loading: false,
    searchBy: "",
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
    },
    loading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    searchBy: (state, action) => ({
      ...state,
      searchBy: action.payload
    })
  }
});

export const { candidateList, loading, newCandidate, searchBy } = candidateSclice.actions;
