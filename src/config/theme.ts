import {extendTheme} from "native-base";

export const theme = extendTheme({
    config: {
        useSystemColorMode: false,
        initialColorMode: "dark"
    },
    colors: {
        dark:"335491",
        theme: {
            primary: "#335491",
            secondary: "#B9B9B5",
        },
        social: {
            linkedin: '#0e76a8',
            instagram: '#E1306C',
            twitter: '#1DA1F2',
            Whatsapp: '#25D366',
            facebook: '#3b5998'
        }
    },
    fonts: {
        heading: "AlNile",
        mono: "AlNile",
        body:"AlNile",
    },
    fontConfig: {}
});
