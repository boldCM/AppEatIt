import React, { useState } from "react";
import { DiamondLine } from "../styledComponents/Lines";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import CalendarCheck from "../../assets/calendarCheck.svg";
import CalendarFilled from "../../assets/calendarFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { updateWeekByRecipeName } from "../../api/connectJSON";

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

const RecipeListItem = ({ RecipeName }) => {
  const [inCalender, setInCalender] = useState(false);

  const CalendarSrc = !inCalender ? CalendarCheck : CalendarFilled;

  const CalendarAlt = !inCalender
    ? "Item not in Calendar"
    : "Item is in Calendar";

  const putRecipeInWeek = async (RecipeName) => {
    await updateWeekByRecipeName(RecipeName);
  };

  const handleClick = (RecipeName) => {
    // write function, die in die db.json speichert, also ein put(?)
    putRecipeInWeek(RecipeName);
    setInCalender(!inCalender);
  };

  return (
    <>
      <RecipeItem>
        <Link to={`/${RecipeName}`}>{RecipeName}</Link>
        <IconButton
          iconSrc={CalendarSrc}
          iconAlt={CalendarAlt}
          // onClick={() => setInCalender(!inCalender)}
          onClick={() => handleClick(RecipeName)}
        />
      </RecipeItem>
      <DiamondLine />
    </>
  );
};

RecipeListItem.propTypes = {
  RecipeName: PropTypes.string,
};

export default RecipeListItem;
