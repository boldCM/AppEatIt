import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { OverlayLine, UnderlineHeaderOverlay } from "../styledComponents/Lines";
import IconButton from "../BottomNav/IconButton";
import DeleteIcon from "../../assets/deleteIcon.svg";
import { deleteWholeWeek } from "../../api/connectJSON";

const ContainerOverlayItems = styled.div`
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
`;

const LinkedItem = styled(Link)`
  margin: 1rem 0;
  display: block;
  text-align: right;
`;

const OverlayItem = () => {
  const history = useHistory();
  const { title } = useParams();

  const handleWeekDelete = async () => {
    await deleteWholeWeek();
    if (!title === "/") {
      history.push("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <ContainerOverlayItems>
      <h2>Übersicht</h2>
      <UnderlineHeaderOverlay />
      <IconButton
        iconSrc={DeleteIcon}
        iconAlt="DeleteIcon"
        onClick={() => handleWeekDelete()}
        content="Wochenübersicht löschen"
      />

      <OverlayLine />
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
