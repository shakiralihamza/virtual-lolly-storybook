import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import InputText from "../components/InputText";
import {Box} from "@mui/material";

export default {
    title: 'Components/InputText',
    component: InputText,
    argTypes: {
        label: {control: 'text'},
        rows: {control: 'number'},
        multiline: {control: 'boolean'},
        value: {
            control: {
                disable: true,
            },
        },
        touched: {control: 'boolean'},
        error: {control: 'text'},
    },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
    const [value, setValue] = useState('');
    return (
        <>
            <Box sx={{width:'400px'}}>
                <InputText
                    {...args}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    value={value}
                />
            </Box>
        </>
    );
}

export const TextField = Template.bind({});
TextField.args = {
    label: 'Your Message',
};

export const TextArea = Template.bind({});
TextArea.args = {
    ...TextField.args,
    rows: 3,
    multiline: true,
};


export const TextFieldWithError = Template.bind({});
TextFieldWithError.args = {
    ...TextField.args,
    touched: true,
    error:'Error message',
};

export const TextAreaWithError = Template.bind({});
TextAreaWithError.args = {
    ...TextArea.args,
    touched: true,
    error:'Error message',
};
