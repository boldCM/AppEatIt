import React, { useEffect, useState } from "react";
import { DiamondLine } from "../styledComponents/Lines";
import styled from "styled-components/macro";
import IconButton from "../BottomNav/IconButton";
import CalendarCheck from "../../assets/calendarCheck.svg";
import CalendarFilled from "../../assets/calendarFilled.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  deleteRecipeFromWeek,
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
// hier müsste ich die Ingredients, bzw das ganze Objekt übergeben bekommen
const RecipeListItem = ({ RecipeName, Id, WholeRecipe }) => {
  const [inCalender, setInCalender] = useState(null);

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
  }, [RecipeName]);
  const CalendarSrc = !inCalender ? CalendarCheck : CalendarFilled;

  const CalendarAlt = !inCalender
    ? "Item not in Calendar"
    : "Item is in Calendar";

  // um dann hier alle weiteren Infos zum rezept in die Week zu posten
  const handleClick = async (RecipeName) => {
    if (await startIsRecipeInWeek(RecipeName)) {
      await deleteRecipeFromWeek(Id);
      setInCalender(false);
      return;
    } else {
      await putRecipeInWeek(RecipeName, Id, WholeRecipe);
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
  Id: PropTypes.number,
  WholeRecipe: PropTypes.array,
};

export default RecipeListItem;
