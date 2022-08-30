import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from "../components/Button";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        text: { control: 'text' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Make a new lolly to send to a friend',
};
