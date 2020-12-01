import React from "react";
import styled from "styled-components/macro";
import { OverlayLine, UnderlineHeaderOverlay } from "../StyledLines/Lines";

const ContainerOverlayItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--gradient-color);
  background-repeat: no-repeat;
  height: 100%;
  justify-content: center;
  text-align: right;
  h2 {
    font-size: 24px;
    font-weight: 500;
  }
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
      <h2>Übersicht</h2>
      <UnderlineHeaderOverlay />
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
