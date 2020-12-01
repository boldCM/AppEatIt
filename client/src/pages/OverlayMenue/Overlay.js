import React from "react";
import CornerElement from "../../components/Corner/Corner";
import styled from "styled-components/macro";
import { ContainerHeader } from "../../components/Header/Header";
import { UnderlineHeaderOverlay } from "../../components/StyledLines/Lines";
import OverlayItem from "../../components/OverlayItems/OverlayItem";
import PropTypes from "prop-types";

const ContainerOverlay = styled.div`
  bottom: 0;
  right: 0;
  text-align: right;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  padding: 2rem;
  /* background: var(--gradient-color); */
  background-color: pink;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */
  overflow-x: hidden;
  width: 80vw;

  ::before ::after {
    opacity: 0.5;
    backdrop-filter: blur(5px);
  }

  /* @media (max-width: 576px) {
    width: 100%;
  } */
`;

const Overlay = ({ open }) => {
  return (
    <>
      <ContainerOverlay open={open}>
        <ContainerHeader />
        <CornerElement />
        <h1>Übersicht</h1>
        <UnderlineHeaderOverlay />
        <OverlayItem />
      </ContainerOverlay>
    </>
  );
};

Overlay.propTypes = {
  open: PropTypes.bool,
};

export default Overlay;
