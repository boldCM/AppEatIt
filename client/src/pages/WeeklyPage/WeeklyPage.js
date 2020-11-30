import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import styled from "styled-components/macro";
import Header from "../../components/Header";
import WeekListItem from "../../components/WeekListItem/WeekListItem";

const WeekListContainer = styled.div`
  height: 26rem;
  overflow: auto;
`;

const WeeklyPage = () => {
  return (
    <>
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
    </>
  );
};

export default WeeklyPage;
