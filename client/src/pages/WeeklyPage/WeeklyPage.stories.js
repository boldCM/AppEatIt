import React from "react";

import { WeeklyPage } from "./WeeklyPage";

export default {
  title: "Page",
  component: WeeklyPage,
};

export const weeklyPage = (args) => <WeeklyPage {...args} />;
