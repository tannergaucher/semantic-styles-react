import React from "react";

import { Dialog } from "../components";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

const Template = (args) => (
  <Dialog {...args}>
    <h1>Hey</h1>
    <p>sdfsdfdsffdsfsfds</p>
  </Dialog>
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Dialog",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Dialog",
  open: false,
};
