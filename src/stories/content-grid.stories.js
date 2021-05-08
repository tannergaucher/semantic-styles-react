import React from "react";

import { ContentGrid } from "../layout";

export default {
  title: "Layout/Content-Grid",
  component: ContentGrid,
};

const Template = (args) => <ContentGrid {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  responsive: false,
};

export const Responsive = Template.bind({});
Responsive.args = {
  responsive: true,
};
