import React from "react";
import CornerElement from "./Corner";

export default {
  title: "Example/Components/Corner",
  component: CornerElement,
};

export const corner = (args) => <CornerElement {...args} />;
