import React, { useEffect, useState } from "react";
import BottomNav from "../../components/BottomNav/BottomNav";
import {
  Layout,
  ContentContainer,
} from "../../components/styledComponents/LayoutPages";
import { Header } from "../../components/Header";
import { WeekListItem } from "../../components/WeekListItem/WeekListItem";
import { getWeek } from "../../api/connectJSON";

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
        {chosenRecipies?.map((recipe) => (
          <WeekListItem
            key={recipe.Recipe._id}
            RecipeName={recipe.Recipe.RecipeName}
            Id={recipe.Recipe._id}
            ChosenDate={recipe.date}
          />
        ))}
      </ContentContainer>
      <BottomNav />
    </Layout>
  );
};

export default WeeklyPage;
