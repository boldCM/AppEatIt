import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
// import styled from "styled-components/macro";
import {
  Layout,
  WeekListContainer,
} from "../../components/styledComponents/LayoutPages";
import { Header } from "../../components/Header";
import { WeekListItem } from "../../components/WeekListItem/WeekListItem";

// const Layout = styled.div`
//   padding: 63px 0 56px 0;
//   height: 100vh;
// `;

// const WeekListContainer = styled.div`
//   overflow: auto;
//   max-height: 100%;
// `;

const WeeklyPage = () => {
  return (
    <Layout>
      <Header title="Wochenplan" />
      <WeekListContainer>
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
        <WeekListItem />
      </WeekListContainer>
      <BottomNav />
    </Layout>
  );
};

export { WeeklyPage, Layout, WeekListContainer };
