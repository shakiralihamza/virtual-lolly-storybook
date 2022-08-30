import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ViewLollyPage from "../components/ViewLollyPage";

export default {
    title: 'Pages/ViewLollyPage',
    component: ViewLollyPage,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        pageContext: {
            lollyID: {control: 'text'},
            to: {control: 'text'},
            from: {control: 'text'},
            message: {control: 'text'},
            colorTop: {control: 'color'},
            colorMiddle: {control: 'color'},
            colorBottom: {control: 'color'},
        }
    }
} as ComponentMeta<typeof ViewLollyPage>;

const Template: ComponentStory<typeof ViewLollyPage> = (args) => <ViewLollyPage {...args}

/>;

export const Primary = Template.bind({});

Primary.args = {
    pageContext: {
        lollyID: 'jbjkYCRj67',
        to: 'John Doe',
        from: 'Jane Doe',
        message: 'Hello, I am a lolly',
        colorTop: '#ff0000',
        colorMiddle: '#00ff00',
        colorBottom: '#0000ff',
    }
}
