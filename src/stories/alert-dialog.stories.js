import React from "react";

import { AlertDialog } from "../components";

export default {
  title: "Components/Alert-Dialog",
  component: AlertDialog,
};

const Template = (args) => (
  <AlertDialog {...args}>
    <p>dfsdfdsdfssdf</p>
  </AlertDialog>
);

export const Primary = Template.bind({});
Primary.args = {
  open: false,
  label: "Alert Dialog",
  primary: true,
  heading: "Are you sure..",
  text: "sdfsfsdfsdf  sdfsd sdfsf",
  confirmLabel: "Yes, delete",
  cancelLabel: "Nevermindddd, don't delete",
};

export const Secondary = Template.bind({});
Secondary.args = {
  open: false,
  label: "Alert Dialog",
  primary: false,
  heading: "Are you sure..",
  text: "sdfsdsdfsdf",
  confirmLabel: "Yes, delete",
  cancelLabel: "Nevermindddd, don't delete",
};
