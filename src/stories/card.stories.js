import React from "react";

import { Card } from "../components";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  heading: "Card Heading",
  text: "Card text here",
};

export const Image = Template.bind({});
Image.args = {
  heading: "Card heading",
  text: "Card text hereeee",
  src: "https://source.unsplash.com/random",
};

// export const Children = Template.bind({});
// Children.args = {
//   heading: "Card heading",
//   text: "Card text hereeee",
//   src: "https://source.unsplash.com/random",
//   children: true,
// };
