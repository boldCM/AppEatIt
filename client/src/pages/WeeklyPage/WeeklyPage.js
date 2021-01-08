import React, { useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";
import { Header } from "../../components/Header";
import { WeekListItem } from "../../components/WeekListItem/WeekListItem";
import { getWeek } from "../../api/connectJSON";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import RecipeIcon from "../../assets/recipeIcon.svg";

const LinkedItem = styled(Link)`
  margin: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  img {
    padding-left: 5px;
  }
`;

const WeeklyPage = () => {
  const [chosenRecipies, setChosenRecipies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getChosenRecipies = await getWeek();
      setChosenRecipies(getChosenRecipies);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <Header title="Wochenplan" />
      <ContentContainer>
        {chosenRecipies.length <= 0 && (
          <LinkedItem to="/Rezeptübersicht">
            Choose a recipe
            <img src={RecipeIcon} alt="Zur Rezeptübersicht" />
          </LinkedItem>
        )}
        {chosenRecipies?.map((recipe) => (
          <WeekListItem
            key={recipe._id}
            RecipeName={recipe.RecipeName}
            Id={recipe._id}
            ChosenDate={recipe.date}
          />
        ))}

        <BottomNav />
      </ContentContainer>
    </Layout>
  );
};

export default WeeklyPage;
