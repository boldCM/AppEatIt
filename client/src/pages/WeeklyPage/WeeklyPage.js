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

const Placeholder = styled.p`
  text-align: center;
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
          <Placeholder>Choose a recipie </Placeholder>
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
