import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeeklyPage from "./pages/WeeklyPage/WeeklyPage";
import SingleRecipe from "./pages/SingleRecipePage/SingleRecipePage";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage";
import GroceryListPage from "./pages/GroceryListPage/GroceryListPage";
import Splashpage from "./pages/SplashPage/SplashPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4100);
  });

  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/Rezeptübersicht">
            <RecipeListPage />
          </Route>
          <Route path="/Einkaufsliste">
            <GroceryListPage />
          </Route>
          <Route path="/Home">
            <WeeklyPage />
          </Route>
          <Route path="/:RecipeName">
            <SingleRecipe />
          </Route>
          <Route path="/">{loading ? <Splashpage /> : <WeeklyPage />}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
