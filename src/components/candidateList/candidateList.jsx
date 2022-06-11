import { useEffect } from "react";
import { List } from "antd";
import { useSelector } from "react-redux";

import useGetCandidates from "../../hooks/useGetCandidates";
import CandidateCard from "../candidateCard/candidateCard";

const CandidateList = () => {
  const getCandidates = useGetCandidates();
  const { candidates, loading } = useSelector((state) => state.candidate);

  useEffect(() => {
    getCandidates();
  }, [getCandidates]);

  return (
    <List
      loading={loading}
      grid={{
        gutter: 16,
        column: 6,
      }}
      dataSource={candidates}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <CandidateCard {...item} />
        </List.Item>
      )}
    />
  );
};

export default CandidateList;
