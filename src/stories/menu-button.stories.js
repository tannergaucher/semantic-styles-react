import React from "react";

import { MenuButton } from "../components";

export default {
  title: "Components/MenuButton",
  component: MenuButton,
};

const Template = (args) => <MenuButton {...args} />;

export const Plain = Template.bind({});
Plain.args = {};
