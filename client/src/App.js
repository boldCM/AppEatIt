import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeeklyPage from "./pages/WeeklyPage/WeeklyPage";
import SingleRecipe from "./pages/SingleRecipePage/SingleRecipePage";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage";
import GroceryListPage from "./pages/GroceryListPage/GroceryListPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/Rezept">
            <SingleRecipe RecipeName="Geschnetzeltes" />
          </Route>
          <Route path="/Rezeptübersicht">
            <RecipeListPage />
          </Route>
          <Route path="/Einkaufsliste">
            <GroceryListPage />
          </Route>

          <Route path="/">
            <WeeklyPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
