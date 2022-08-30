import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShinyText from "../components/ShinyText";

export default {
    title: 'Components/ShinyText',
    component: ShinyText,
    argTypes: {
        text: { control: 'text' },
        size: { control: 'text' },
        italic: { control: 'boolean' },
    },
} as ComponentMeta<typeof ShinyText>;

const Template: ComponentStory<typeof ShinyText> = (args) => <ShinyText {...args} />;

export const TextLargeItalic = Template.bind({});
TextLargeItalic.args = {
    text: 'Virtual Lollipop',
    size: '5em',
    italic: true
};

export const TextSmallItalic = Template.bind({});
TextSmallItalic.args = {
    text: 'Virtual Lollipop',
    size: '1.5em',
    italic: true
};
