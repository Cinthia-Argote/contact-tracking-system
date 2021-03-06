import React from "react";
import { Layout, Typography } from "antd";

import CandidateList from "./components/candidateList/candidateList";
import SearchCandidate from "./components/searchCandidate/searchCandidate";
import CandidateCreateFormModal from "./components/candidateForm/candidateFormModal";
import SelectTag from "./components/selectTag/selectTag";

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
        <CandidateCreateFormModal />
      </div>
      <div className="search-content">
        <SearchCandidate />
        <SelectTag />
      </div>
      <CandidateList />
    </Content>
  </Layout>
);

export default App;
