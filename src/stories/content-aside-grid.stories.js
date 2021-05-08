import React from "react";

import { ContentAsideGrid, Content, Aside } from "../layout";

export default {
  title: "Layout/Content-Aside-Grid",
  component: ContentAsideGrid,
};

const Template = (args) => (
  <ContentAsideGrid {...args}>
    <Content>
      <h3>Content</h3>
    </Content>
    <Aside>
      <h3>Aside</h3>
    </Aside>
  </ContentAsideGrid>
);

export const Reverse = Template.bind({});

Reverse.args = {
  reverse: true,
};
