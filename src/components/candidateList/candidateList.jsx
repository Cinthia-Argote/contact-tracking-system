import { useEffect } from "react";
import { List } from "antd";
import { useSelector } from "react-redux";

import useGetCandidates from "../../hooks/useGetCandidates";
import CandidateCard from "../candidateCard/candidateCard";

const CandidateList = () => {
  const getCandidates = useGetCandidates();
  const data = useSelector(state => state.candidate.candidates);

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);
    
  return (
    <List
    grid={{
      gutter: 16,
      column: 6,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item key={item.id}>
        <CandidateCard {...item} />
      </List.Item>
    )}
  />
  );
};

export default CandidateList;