import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCandidates } from "../services/candidates";
import { candidateList } from "../store/candidateSlice";

const useSearchCandidates = () => {
  const dispatch = useDispatch();
  const { searchBy } = useSelector((state) => state.candidate);

  return useCallback((value) => {
      searchCandidates(value, searchBy)
      .then(data => {
        dispatch(candidateList(data));
      });
  }, [dispatch, searchBy]);
};

export default useSearchCandidates;
