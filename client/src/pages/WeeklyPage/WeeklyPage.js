import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";
import { Header } from "../../components/Header";
import { WeekListItem } from "../../components/WeekListItem/WeekListItem";

const WeeklyPage = () => {
  return (
    <Layout>
      <Header title="Wochenplan" />
      <ContentContainer>
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
      </ContentContainer>
      <BottomNav />
    </Layout>
  );
};

export default WeeklyPage;
