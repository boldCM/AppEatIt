import React, { useEffect, useState } from "react";
import { DiamondLine } from "../styledComponents/Lines";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import CalendarCheck from "../../assets/calendarCheck.svg";
import CalendarFilled from "../../assets/calendarFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getWeek, updateWeekByRecipeName } from "../../api/connectJSON";

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
  const [recipeInCalendar, setRecipeInCalendar] = useState([]);

  const CalendarSrc = !inCalender ? CalendarCheck : CalendarFilled;

  const CalendarAlt = !inCalender
    ? "Item not in Calendar"
    : "Item is in Calendar";

  // useEffect(() => {
  //   async function fetchWeek() {
  //     const getRecipiesInWeek = await getWeek();
  //     setRecipeInCalendar(getRecipiesInWeek);
  //   }
  //   fetchWeek();
  // }, []);

  const putRecipeInWeek = async (RecipeName) => {
    await updateWeekByRecipeName(RecipeName);
  };

  const handleClick = (RecipeName) => {
    putRecipeInWeek(RecipeName);
    // if (WeekIncludes) {
    // if (RecipiesInWeekArray.includes({ RecipeName })) {
    // setInCalender(inCalender);
    // return;
    // } else {
    setInCalender(true);
  };
  // }, []);
  // ursprüngliche HandleClick:
  // const handleClick = (RecipeName) => {
  //   putRecipeInWeek(RecipeName);
  //   setInCalender(!inCalender);
  // };

  // ist das Rezept schon vorhanden?
  // getWeek() -> nach RecipeName filtern
  // includes?
  // dann soll es rausgenommen werden (icon changes)
  // wenn es noch nicht vorhanden ist,
  //  soll es hinzugefügt werden.

  return (
    <>
      <RecipeItem>
        <Link to={`/${RecipeName}`}>{RecipeName}</Link>
        <IconButton
          iconSrc={CalendarSrc}
          iconAlt={CalendarAlt}
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
