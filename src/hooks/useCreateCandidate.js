import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createCandidate } from "../services/candidates";
import { newCandidate } from "../store/candidateSlice";

const useCreateCandidate = () => {
  const dispatch = useDispatch();

  return useCallback((values) => {
    createCandidate(values)
      .then(data => {
        dispatch(newCandidate(data));
      });
  }, [dispatch]);
};

export default useCreateCandidate;
