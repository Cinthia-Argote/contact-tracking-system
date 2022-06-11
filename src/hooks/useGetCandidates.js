import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCandidates } from "../services/candidates";
import { candidateList } from "../store/candidateSlice";

const useGetCandidates = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    getCandidates()
      .then(data => {
        dispatch(candidateList(data));
      });
  }, [dispatch]);
};

export default useGetCandidates;
