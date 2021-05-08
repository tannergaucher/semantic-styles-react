import React from "react";

import { Tooltip } from "../components";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Plain = Template.bind({});
Plain.args = {};
