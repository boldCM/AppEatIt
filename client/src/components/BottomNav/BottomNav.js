import React from "react";
import styled from "styled-components/macro";
import IconButton from "./IconButton";
import DeleteIcon from "../../assets/deleteIcon.svg";
import ShareIcon from "../../assets/shareIcon.svg";
import HomeIcon from "../../assets/home.svg";
import MenueButton from "./MenueButton";

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

const HomeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const BottomNav = () => {
  return (
    <>
      <MenueButton />
      <Footer>
        <BottomNavBar>
          <HomeButton href="/">
            <img src={HomeIcon} alt={"Zur Wochenübersicht"} />
          </HomeButton>
          <IconButton iconSrc={ShareIcon} iconAlt={"ShareIcon"} />
          <IconButton iconSrc={DeleteIcon} iconAlt={"DeleteIcon"} />
        </BottomNavBar>
      </Footer>
    </>
  );
};

export default BottomNav;
