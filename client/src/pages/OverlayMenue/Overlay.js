import React from "react";
import CornerElement from "../../components/Corner/Corner";
import styled from "styled-components/macro";
import OverlayItem from "../../components/OverlayItems/OverlayItem";
import PropTypes from "prop-types";

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--gradient-color);
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  backdrop-filter: blur(10px);
  ${({ open }) => (!open ? "opacity:0; visibility:hidden;" : "opacity:0.7")};
  transition: opacity 0.3s ease-in-out;
`;

const ContainerOverlay = styled.div`
  right: 0;
  top: 0;
  text-align: right;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: absolute;
`;

const Overlay = ({ open }) => {
  return (
    <>
      <Blur open={open} />
      <ContainerOverlay open={open}>
        <CornerElement />
        <OverlayItem />
      </ContainerOverlay>
    </>
  );
};

Overlay.propTypes = {
  open: PropTypes.bool,
};

export default Overlay;
