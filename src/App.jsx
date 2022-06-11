import React from "react";
import { Layout, Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CandidateList from "./components/candidateList/candidateList";
import SearchCandidate from "./components/searchCandidate/searchCandidate";
import "antd/dist/antd.min.css";
import "./App.scss";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => (
  <Layout className="layout">
    <Header>
      <img alt="logo" src="/images/logo.svg" />
      <div>Contact Tracking System</div>
    </Header>
    <Content>
      <div className="title-content">
        <Title level={2}>Candidates</Title>
        <Button type="primary" icon={<PlusOutlined />}> Add Candidate </Button>
      </div>
      <div className="search-content">
        <SearchCandidate />
      </div>
      <CandidateList />
    </Content>
  </Layout>
);

export default App;
