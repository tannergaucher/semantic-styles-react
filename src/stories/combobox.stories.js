import React from "react";

import { Combobox } from "../components";

export default {
  title: "Components/Combobox",
  component: Combobox,
};

const Template = (args) => <Combobox {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  options: ["Apple", "Banana", "Orange", "Pineapple", "Kiwi"],
  placeholder: "Placeholder",
};
