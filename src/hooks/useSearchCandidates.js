import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchCandidates } from "../services/candidates";
import { candidateList } from "../store/candidateSlice";

const useSearchCandidates = () => {
  const dispatch = useDispatch();

  return useCallback((value) => {
      searchCandidates(value)
      .then(data => {
        dispatch(candidateList(data));
      });
  }, [dispatch]);
};

export default useSearchCandidates;
