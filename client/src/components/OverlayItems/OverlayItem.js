import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { OverlayLine, UnderlineHeaderOverlay } from "../styledComponents/Lines";

const ContainerOverlayItems = styled.div`
  /* @media (min-width: 576px) { */
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--gradient-color);
  background-repeat: no-repeat;
  height: 100%;
  justify-content: center;
  text-align: right;
  margin-bottom: 50px;
  h2 {
    font-size: 24px;
    font-weight: 500;
  }
  /* } */
`;

const LinkedItem = styled(Link)`
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
      <LinkedItem to="/Einkaufsliste">Zur Einkaufsliste</LinkedItem>
      <OverlayLine />
      <LinkedItem to="/">Neue Einkaufsliste erstellen</LinkedItem>
      <OverlayLine />
      <LinkedItem to="/">Listen-Übersicht</LinkedItem>
      <OverlayLine />
      <LinkedItem to="/">Neue Liste erstellen</LinkedItem>
      <OverlayLine />
      <LinkedItem to="/Rezeptübersicht">Zur Rezeptübersicht</LinkedItem>
      <OverlayLine />
      <LinkedItem to="/">Neues Rezept erstellen</LinkedItem>
      <OverlayLine />
    </ContainerOverlayItems>
  );
};

export default OverlayItem;
