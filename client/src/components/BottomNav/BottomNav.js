import React, { useState } from "react";
import styled from "styled-components/macro";
import DiamondButton from "../../assets/mainButton.png";
import IconButton from "./IconButton";
import BackIcon from "../../assets/backIcon.png";
import CalendarIcon from "../../assets/calendarIcon.png";
import DeleteIcon from "../../assets/deleteIcon.png";
import ShareIcon from "../../assets/shareIcon.png";
import Overlay from "../../pages/OverlayMenue/Overlay";
// import PropTypes from 'prop-types'

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
  display: flex;
  justify-content: space-around;
  padding-right: 6rem;
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
  const [open, setOpen] = useState(false);

  // const toggleOpen = () => {
  //   setOpen(!open);
  // };

  // evtl eine funktion die gerendert wird, wenn ein useState true ist...

  return (
    <>
      <Triangle />
      <BorderTraingle />
      <MainButton onClick={() => setOpen(!open)}>
        <MainButtonImg src={DiamondButton} alt="Menu-Button" />
      </MainButton>
      {open && <Overlay open={open} />}
      <Footer>
        <BottomNavBar>
          <IconButton iconSrc={BackIcon} iconAlt={"BackIcon"} />
          <IconButton iconSrc={CalendarIcon} iconAlt={"CalendarIcon"} />
          <IconButton iconSrc={ShareIcon} iconAlt={"ShareIcon"} />
          <IconButton iconSrc={DeleteIcon} iconAlt={"DeleteIcon"} />
        </BottomNavBar>
      </Footer>
    </>
  );
};

export default BottomNav;
