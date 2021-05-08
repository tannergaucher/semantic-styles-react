import React from "react";

import { Disclosure } from "../components";

export default {
  title: "Components/Disclosure",
  component: Disclosure,
};

const Template = (args) => <Disclosure {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  open: false,
  title: "Disclosure",
  text: "sdfsdfsdfs adfds sdf fsdfsd sd fsf",
};

export const Open = Template.bind({});
Open.args = {
  open: true,
  title: "Disclosure",
  text: "Some disclosure text....",
};
