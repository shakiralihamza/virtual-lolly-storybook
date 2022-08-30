import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Melted from "../components/Melted";
import {Box} from "@mui/material";

export default {
    title: 'Pages/Melted',
    component: Melted,
} as ComponentMeta<typeof Melted>;

const Template: ComponentStory<typeof Melted> = (args) => (
    <Box sx={{'.MuiTypography-h4': {color:'white'}}}>
        <Melted {...args}  />
    </Box>
);

export const Primary = Template.bind({});
