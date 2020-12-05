import React from "react";
import styled from "styled-components/macro";
import { useState } from "react";
import DiamondButton from "../../assets/mainButton.svg";
import Overlay from "../../pages/OverlayMenue/Overlay";

const MainButton = styled.button`
  background: none;
  border: none;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 2;
`;

const MainButtonImg = styled.img`
  margin-right: 11px;
  margin-bottom: 12px;
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

const MenueButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Triangle />
      <BorderTraingle />
      <MainButton onClick={() => setOpen(!open)}>
        <MainButtonImg src={DiamondButton} alt="Menu-Button" />
      </MainButton>
      <Overlay open={open} />
    </>
  );
};

export default MenueButton;
