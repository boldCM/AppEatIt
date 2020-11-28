import React from "react";
import styled from "styled-components/macro";
// import PropTypes from "prop-types";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UnderlineHeader = styled.div`
  border-top: 1.5px solid var(--active-color);
  width: 100px;
  margin-top: -7px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <h1>Wochenplan</h1>
      <UnderlineHeader />
    </ContainerHeader>
  );
};

export default Header;
