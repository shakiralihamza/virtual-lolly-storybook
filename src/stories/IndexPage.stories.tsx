import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IndexPage from "../components/IndexPage";

export default {
  title: 'Pages/IndexPage',
  component: IndexPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />;

export const Primary = Template.bind({});
