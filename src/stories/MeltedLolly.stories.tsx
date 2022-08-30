import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MeltedLolly from "../components/MeltedLolly";

export default {
    title: 'Components/MeltedLolly',
    component: MeltedLolly,
} as ComponentMeta<typeof MeltedLolly>;

const Template: ComponentStory<typeof MeltedLolly> = (args) => <MeltedLolly {...args}  />;

export const Primary = Template.bind({});
