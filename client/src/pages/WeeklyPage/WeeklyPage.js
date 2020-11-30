import React from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
// import PropTypes from "prop-types";
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
      <Header />
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
// Page.propTypes = {};

// Page.defaultProps = {
//   user: null,
// };

export default WeeklyPage;
