import React from "react";
import { DiamondLine } from "../styledComponents/Lines";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import CalendarCheck from "../../assets/calendarCheck.svg";
import CalendarFilled from "../../assets/calendarFilled.svg";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  hr {
    margin: 0;
  }
`;

const RecipeItem = styled.div`
  display: flex;
  a {
    margin: 1rem 0 0.8rem 0;
  }
  button {
    padding: 0;
    margin: 6px 0 0 8px;
  }
`;

const RecipeList = () => {
  return (
    <ListContainer>
      <RecipeItem>
        <a href="/">Lasagne</a>
        <IconButton iconSrc={CalendarCheck} iconAlt={"Item is in Calendar"} />
      </RecipeItem>
      <DiamondLine />
      <RecipeItem>
        <a href="/">Geschnetzltes</a>
        <IconButton iconSrc={CalendarFilled} iconAlt={"item in Calendar?"} />
      </RecipeItem>
      <DiamondLine />
    </ListContainer>
  );
};

export default RecipeList;
