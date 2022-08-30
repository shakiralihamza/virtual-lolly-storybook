import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreatePage from "../components/CreatePage";

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CreatePage>;

const Template: ComponentStory<typeof CreatePage> = (args) => <CreatePage {...args} />;

export const Primary = Template.bind({});
