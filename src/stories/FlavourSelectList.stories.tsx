import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FlavorSelectList from "../components/FlavourSelectList";

export default {
    title: 'Components/FlavorSelectList',
    component: FlavorSelectList,
    argTypes: {
        colorTop: {control: {disable: true}},
        colorMiddle: {control: {disable: true}},
        colorBottom: {control: {disable: true}}
    }
} as ComponentMeta<typeof FlavorSelectList>;

const Template: ComponentStory<typeof FlavorSelectList> = (args) => {
    const [colorTop, setColorTop] = useState('#ff0000');
    const [colorMiddle, setColorMiddle] = useState('#00ff00');
    const [colorBottom, setColorBottom] = useState('#0000ff');
    return (
        <>
            <FlavorSelectList
                {...args}
                colorTop={colorTop}
                colorMiddle={colorMiddle}
                colorBottom={colorBottom}
                onChangeTop={(event) => setColorTop(event.target.value)}
                onChangeMiddle={(event) => setColorMiddle(event.target.value)}
                onChangeBottom={(event) => setColorBottom(event.target.value)}
            />
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    colorTop: '#ff0000',
    colorMiddle: '#00ff00',
    colorBottom: '#0000ff',
};
