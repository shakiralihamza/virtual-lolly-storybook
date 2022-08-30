import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import InputForm from "../components/InputForm";
import {Box} from "@mui/material";

export default {
    title: 'Components/InputForm',
    component: InputForm,
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
    <Box sx={{width:'400px', ml:5}}>
        <InputForm {...args} />
    </Box>
);

export const Primary = Template.bind({});
