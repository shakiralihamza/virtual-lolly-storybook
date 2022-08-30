import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FlavorSelect from "../components/FlavorSelect";

export default {
    title: 'Components/FlavorSelect',
    component: FlavorSelect,
    argTypes: {
        value: {
            control: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof FlavorSelect>;

const Template: ComponentStory<typeof FlavorSelect> = (args) => {
    const [color, setColor] = useState('#ff0000');
    return (
        <>
            <FlavorSelect
                {...args}
                onChange={(event) => setColor(event.target.value)}
                value={color}
            />
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    value: '#ff0000',
};
