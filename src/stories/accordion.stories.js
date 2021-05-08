import React from "react";

import { Accordion } from "../components";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Plain = Template.bind({});

Plain.args = {
  items: [
    {
      label: "Step 1",
      text: `Here are some detailed instructions about doing a thing. I am very
  complex and probably contain a lot of content, so a user can hide or
  show me by clicking the button above.`,
    },
    {
      label: "Step 2",
      text: `Here are some detailed instructions about doing a thing. I am very
  complex and probably contain a lot of content, so a user can hide or
  show me by clicking the button above.`,
    },
    {
      label: "Step 3",
      text: `Here are some detailed instructions about doing a thing. I am very
  complex and probably contain a lot of content, so a user can hide or
  show me by clicking the button above.`,
    },
  ],
};
