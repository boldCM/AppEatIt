import React from "react";

import WeeklyPage from "./WeeklyPage";
// import * as HeaderStories from "../../components/Header/Header.stories";

export default {
  title: "Page",
  component: WeeklyPage,
};

export const weeklyPage = (args) => <WeeklyPage {...args} />;
