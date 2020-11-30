import React from "react";
import styled from "styled-components/macro";
import CornerElement from "../Corner/Corner";

const ContainerHeader = styled.header`
  background: linear-gradient(#f2d3ac, #f3d7b4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;

const UnderlineHeader = styled.hr`
  border-top: 1.5px solid var(--active-color);
  width: 100px;
  margin-top: -7px;
  /* spacing looked best with the odd number of -7px */
`;

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <h1>Wochenplan</h1>
        <UnderlineHeader />
      </ContainerHeader>
      <CornerElement />
    </>
  );
};

export default Header;
