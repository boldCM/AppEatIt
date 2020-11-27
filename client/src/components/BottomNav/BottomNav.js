import React from "react";
import styled from "styled-components/macro";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const BottomNavBar = styled.div`
  height: 56px;
  background-color: var(--primary-color);
  border-top: 1px solid var(--active-color);
`;

const BottomNav = () => {
  return (
    <>
      <Footer>
        <BottomNavBar />
      </Footer>
    </>
  );
};

export default BottomNav;
