import React from "react";
import EmptyPage from "./EmptyPage";

export default {
  title: "Example/Page",
  component: EmptyPage,
};

export const emptyPage = (args) => <EmptyPage {...args} />;
