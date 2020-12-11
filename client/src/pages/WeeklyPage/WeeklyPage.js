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
  console.log(chosenRecipies);

  return (
    <Layout>
      <Header title="Wochenplan" />
      <ContentContainer>
        {chosenRecipies?.map((recipe) => (
          <WeekListItem key={recipe.id} RecipeName={recipe.RecipeName} />
        ))}
      </ContentContainer>
      <BottomNav />
    </Layout>
  );
};

export default WeeklyPage;
