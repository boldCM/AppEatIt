import React from "react";
import styled from "styled-components/macro";
import Corner from "../assets/corner.png";

const CornerContainer = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  /* z-index: 1; */
`;

const WhiteCorner = styled.div`
  background-color: white;
  width: 57px;
  height: 57px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
`;

const FoldedCorner = styled.img`
  margin-right: -5px;
  margin-top: -3px;
`;

const CornerElement = () => {
  return (
    <CornerContainer>
      <WhiteCorner />
      <FoldedCorner src={Corner} alt="Corner" />
    </CornerContainer>
  );
};

export default CornerElement;
