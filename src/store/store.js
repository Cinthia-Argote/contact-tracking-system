import { configureStore } from "@reduxjs/toolkit";

import { candidateSclice } from "./candidateSlice";

const store = configureStore({
  reducer: {
    candidate: candidateSclice.reducer,
  }
});

export default store;
