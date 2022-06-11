import { Input } from "antd";
import useSearchCandidates from "../../hooks/useSearchCandidates";

const { Search } = Input;

const SearchCandidate = () => {
  const searchCandidates = useSearchCandidates();

  const handleSearch = (value) => {
    searchCandidates(value);
  };

  return (
    <Search
      placeholder="Search..."
      loading={false}
      onSearch={handleSearch}
      allowClear
    />
  );
};

export default SearchCandidate;
