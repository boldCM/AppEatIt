import React from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.svg";
import { DiamondLine } from "../StyledLines/Lines";

const ContainerWeek = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0.5rem;
`;

const Diamond = styled.div`
  background-image: url(${DiamondImg});
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

const TextWeek = styled.a`
  color: var(--text-color);
  padding-bottom: 1px;
  /* 1px looked more aligned with the hr line. */
`;

const WeekListItem = () => {
  return (
    <ContainerWeek>
      <Diamond>
        <time dateTime="11-30">
          Mo
          <br />
          30.11.
        </time>
      </Diamond>
      <DiamondLine />
      <TextWeek href="/">Geschnetzeltes</TextWeek>
    </ContainerWeek>
  );
};

export { WeekListItem };
