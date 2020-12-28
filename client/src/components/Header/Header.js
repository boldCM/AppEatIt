import React from "react";
import styled from "styled-components/macro";
import CornerElement from "../Corner/Corner";
import PropTypes from "prop-types";
import { UnderlineHeader } from "../styledComponents/Lines";

const ContainerHeader = styled.header`
  /* background: linear-gradient(var(--secondary-color), #f3d7b4); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;

  h1 {
    text-align: center;
    width: 100%;
    padding-right: 54px;
    padding-left: 54px;
    /* overflow-wrap: break-word; */
    /* word-break: break-all; */
  }

  @media screen and (max-width: 400px) {
    /* overflow-wrap: white-space; */
    /* padding-right: 24px; */
  }

  @media screen and (min-width: 401px) and (max-width: 430px) {
    /* padding-right: 46px; */
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
