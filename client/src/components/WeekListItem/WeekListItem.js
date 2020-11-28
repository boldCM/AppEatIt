import React from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.png";
import DiamondActiveImg from "../../assets/diamondActive.png";

const ContainerWeekLI = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0.5rem;
`;

const Diamond = styled.div`
  background-image: url(${DiamondActiveImg});
  height: 5.8rem;
  width: 5.8rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--active-color);
`;

const DiamondLine = styled.div`
  border-top: 1.5px solid var(--active-color);
  width: 5rem;
  margin-left: -2px;
  margin-bottom: 1px;
`;

const TextWeekLI = styled.div`
  color: var(--active-color);
  margin-bottom: 2px;
  margin-left: 5px;
`;

const WeekListItem = () => {
  return (
    <ContainerWeekLI>
      <Diamond>
        {/* <img src={DiamondActiveImg} alt="Active Diamond" /> */}
        28.11.
      </Diamond>
      <DiamondLine />
      <TextWeekLI>Geschnetzeltes</TextWeekLI>
    </ContainerWeekLI>
  );
};

export default WeekListItem;

// ein Eltern Div:

// ein Div für diamond bild damit man den Text schön zentrieren kann
// evtl ein weiteres Div für das Datum

// ein Div für den Strich(oder bild als Strich)
// ein Div für den TextRezept
