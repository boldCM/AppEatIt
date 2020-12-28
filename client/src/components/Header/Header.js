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
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  background: (height<=65px)? (linear-gradient(var(--secondary-color), #f3d7b4)):
 (linear-gradient(var(--secondary-color), #f5DBBA));

  @media screen and (max-width: 400px) {
padding-right: 24px;

    }
}
`;

// wenn das Element unter die Ecke geht, mache einen Zeilenumbruch

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
