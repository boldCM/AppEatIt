import React from "react";
import styled from "styled-components/macro";
import CornerElement from "../Corner/Corner";
import PropTypes from "prop-types";
import { UnderlineHeader } from "../styledComponents/Lines";

const ContainerHeader = styled.header`
  /* background: linear-gradient(var(--secondary-color), #f3d7b4); */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* width: 100%; */
  /* top: 0; */
  display: grid;
  grid-row: 1/2;
  h1 {
    text-align: center;
    width: 100%;
    padding-right: 54px;
    padding-left: 54px;
  }
`;

const Header = ({ title }) => {
  return (
    <>
      <ContainerHeader>
        <h1>{title}</h1>
        <UnderlineHeader />
      </ContainerHeader>
      <CornerElement />
    </>
  );
};

export { Header, ContainerHeader };

Header.propTypes = {
  title: PropTypes.string,
};
