import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCandidates } from "../services/candidates";
import { candidateList, loading } from "../store/candidateSlice";

const useGetCandidates = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(loading(true));
    getCandidates()
      .then(data => {
        dispatch(candidateList(data));
        dispatch(loading(false));
      });
  }, [dispatch]);
};

export default useGetCandidates;
