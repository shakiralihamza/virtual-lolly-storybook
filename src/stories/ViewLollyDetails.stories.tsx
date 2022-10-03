import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ViewLollyDetails from "../components/ViewLollyDetails";
import {Box} from "@mui/material";

export default {
    title: 'Components/ViewLollyDetails',
    component: ViewLollyDetails,
    argTypes: {
        to: {control: 'text'},
        from: {control: 'text'},
        message: {control: 'text'},
        lollyURL: {control: 'text'},
    },
} as ComponentMeta<typeof ViewLollyDetails>;

const Template: ComponentStory<typeof ViewLollyDetails> = (args) => (
    <Box sx={{maxWidth:'500px'}}>
        <ViewLollyDetails {...args} />
    </Box>
);

export const Primary = Template.bind({});
Primary.args = {
    to: 'John Doe',
    from: 'Jane Doe',
    message: 'I love you',
    lollyURL: 'uVOhnpGPk'
};
