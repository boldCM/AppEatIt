import React from "react";
import styled from "styled-components/macro";
import DiamondButton from "../../assets/MainButton.png";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const BottomNavBar = styled.div`
  height: 56px;
  background-color: var(--primary-color);
  border-top: 2px solid var(--active-color);
`;

const MainButton = styled.button`
  background: none;
  border: none;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 3;
`;

const MainButtonImg = styled.img`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 45px solid white;
  background-color: transparent;
  bottom: 0;
  right: 0;
  margin-right: 12px;
  margin-bottom: 11px;
  position: fixed;
  z-index: 2;
`;

const BorderTraingle = styled.div`
  width: 0;
  height: 0;
  border-left: 46px solid transparent;
  border-right: 46px solid transparent;
  border-top: 46px solid var(--active-color);
  background-color: transparent;
  bottom: 0;
  right: 0;
  margin-right: 11px;
  margin-bottom: 9px;
  position: fixed;
  z-index: 1;
`;

const BottomNav = () => {
  return (
    <>
      <Triangle/>
      <BorderTraingle/>
      <MainButton>
        <MainButtonImg src={DiamondButton} alt="Menu-Button" />
      </MainButton>
      <Footer>
        <BottomNavBar />
      </Footer>
    </>
  );
};

export default BottomNav;
