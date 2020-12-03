import React, { useState } from "react";
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
  const [inCalender, setInCalender] = useState(false);

  const CalendarSrc = inCalender ? CalendarCheck : CalendarFilled;

  const CalendarAlt = inCalender
    ? "Item not in Calendar"
    : "Item is in Calendar";

  return (
    <ListContainer>
      <RecipeItem>
        <a href="/">Lasagne</a>
        <IconButton
          iconSrc={CalendarSrc}
          iconAlt={CalendarAlt}
          onClick={() => setInCalender(!inCalender)}
        />
      </RecipeItem>
      <DiamondLine />
      <RecipeItem>
        <a href="/">Geschnetzeltes</a>
        <IconButton iconSrc={CalendarSrc} iconAlt={CalendarAlt} />
      </RecipeItem>
      <DiamondLine />
    </ListContainer>
  );
};

export default RecipeList;
