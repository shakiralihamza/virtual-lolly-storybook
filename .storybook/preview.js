export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'Virtual Lolly Dark',
        values: [
            {
                name: 'Virtual Lolly Dark',
                value: '#21212b',
            },
        ],
    }
}
