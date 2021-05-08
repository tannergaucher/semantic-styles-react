import React from "react";

import { Slider } from "../components";

export default {
  title: "Components/Slider",
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Plain = Template.bind({});
Plain.args = {};
