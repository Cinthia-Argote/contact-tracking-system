import React from "react";
import { Layout } from "antd";

import "antd/dist/antd.min.css";
import "./App.scss";
import CandidateList from "./components/candidateList/candidateList";

const { Header, Content } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <img alt="logo" src="/images/logo.svg" />
      <div>Contact Tracking System</div>
    </Header>
    <Content>
      <CandidateList />
    </Content>
  </Layout>
);

export default App;
