import React from "react";
import WeekListItem from "./WeekListItem";

export default {
  title: "Components",
  component: WeekListItem,
};

export const weekListItem = (args) => <WeekListItem {...args} />;
