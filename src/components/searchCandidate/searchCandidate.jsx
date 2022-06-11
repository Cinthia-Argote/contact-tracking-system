import { Input } from "antd";
import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import useSearchCandidates from "../../hooks/useSearchCandidates";

const { Search } = Input;

const SearchCandidate = () => {
  const searchCandidates = useSearchCandidates();
  const { loading } = useSelector((state) => state.candidate);

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    searchCandidates(value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <Search
      placeholder="Search..."
      loading={loading}
      allowClear
      onChange={debouncedResults}
    />
  );
};

export default SearchCandidate;
