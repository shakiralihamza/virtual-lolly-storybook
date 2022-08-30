import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Lolly from '../components/Lolly';

export default {
    title: 'Components/Lolly',
    component: Lolly,
    argTypes: {
        colorTop: { control: 'color' },
        colorMiddle: { control: 'color' },
        colorBottom: { control: 'color' },
    },
} as ComponentMeta<typeof Lolly>;

const Template: ComponentStory<typeof Lolly> = (args) => <Lolly {...args} />;

export const ColorOption1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColorOption1.args = {
    colorTop: '#d52358',
    colorMiddle: '#e95946',
    colorBottom: '#deaa43',
};

export const ColorOption2 = Template.bind({});
ColorOption2.args = {
    colorTop: '#2397d5',
    colorMiddle: '#a0e946',
    colorBottom: '#38280a',
};

export const ColorOption3 = Template.bind({});
ColorOption3.args = {
    colorTop: '#c4457e',
    colorMiddle: '#7ce946',
    colorBottom: '#030741',
};
