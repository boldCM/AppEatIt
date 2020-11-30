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
  text-align: center;
  padding-bottom: 5px;
`;

const DiamondLine = styled.hr`
  border-top: 1.5px solid var(--active-color);
  width: 5rem;
  margin: 0 5px 0 -2px;
`;

const TextWeekLI = styled.p`
  color: var(--active-color);
  padding-bottom: 1px;
  /* 1px looked more aligned with the hr line. */
`;

const WeekListItem = () => {
  return (
    <ContainerWeekLI>
      <Diamond>
        <time dateTime="11-30">
          Mo
          <br />
          30.11.
        </time>
      </Diamond>
      <DiamondLine />
      <TextWeekLI>Geschnetzeltes</TextWeekLI>
    </ContainerWeekLI>
  );
};

export default WeekListItem;
