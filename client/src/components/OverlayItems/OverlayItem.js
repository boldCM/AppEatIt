import React from "react";
import styled from "styled-components/macro";
import { OverlayLine } from "../StyledLines/Lines";

const ContainerOverlayItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;

  right: 0;
  bottom: 0;
`;

const LinkedItem = styled.a`
  /* font-weight: 400; */
  margin: 1rem 0;
  display: block;
  text-align: right;
`;

const OverlayItem = () => {
  return (
    <ContainerOverlayItems>
      <LinkedItem href="/">Zur Einkaufsliste</LinkedItem>
      <OverlayLine />
      <LinkedItem href="/">Neue Einkaufsliste erstellen</LinkedItem>
      <OverlayLine />
      <LinkedItem href="/">Listen-Übersicht</LinkedItem>
      <OverlayLine />
      <LinkedItem href="/">Neue Liste erstellen</LinkedItem>
      <OverlayLine />
      <LinkedItem href="/">Zur Rezeptübersicht</LinkedItem>
      <OverlayLine />
      <LinkedItem href="/">Neues Rezept erstellen</LinkedItem>
      <OverlayLine />
    </ContainerOverlayItems>
  );
};

export default OverlayItem;
