import React from "react";
import EmptyPage from "./EmptyPage";

export default {
  title: "Page",
  component: EmptyPage,
};

export const emptyPage = (args) => <EmptyPage {...args} />;
