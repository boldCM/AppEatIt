import React, { useEffect, useState } from "react";
import { DiamondLine } from "../styledComponents/Lines";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import CalendarCheck from "../../assets/calendarCheck.svg";
import CalendarFilled from "../../assets/calendarFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  getWeekByRecipeName,
  updateWeekByRecipeName,
  isRecipeInWeek,
  putRecipeInWeek,
} from "../../api/connectJSON";

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
  const [inCalender, setInCalender] = useState(null);
  // wenn der RecipeName auch in der week auftaucht, setze das Icon auf filled.
  // beim generellen Laden leer, es sei denn, es ist in der week drin

  const startIsRecipeInWeek = async (RecipeName) =>
    await isRecipeInWeek(RecipeName);

  useEffect(() => {
    async function doFetch() {
      if (await startIsRecipeInWeek(RecipeName)) {
        setInCalender(true);
      } else {
        setInCalender(false);
      }
    }
    doFetch();
  }, []);
  const CalendarSrc = !inCalender ? CalendarCheck : CalendarFilled;

  const CalendarAlt = !inCalender
    ? "Item not in Calendar"
    : "Item is in Calendar";

  const handleClick = async (RecipeName) => {
    console.log(await startIsRecipeInWeek(RecipeName));
    if (await startIsRecipeInWeek(RecipeName)) {
      setInCalender(false);
      // toDo: write delete function
      console.log("write delete function");
    } else {
      await putRecipeInWeek(RecipeName);
      setInCalender(true);
      return;
    }
  };

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
