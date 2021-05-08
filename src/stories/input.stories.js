import React from "react";

import { Input } from "../components";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Active = Template.bind({});
Active.args = {
  disabled: false,
};

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ErrorActive = Template.bind({});
ErrorActive.args = {
  error: true,
};

export const ErrorDisabled = Template.bind({});
ErrorDisabled.args = {
  error: true,
  disabled: true,
};
