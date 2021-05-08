import React from "react";

import { Tabs } from "../components";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Plain = Template.bind({});
Plain.args = {};
