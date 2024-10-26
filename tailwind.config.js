/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#F0F1FF",
                    200: "#E3E5FF",
                    300: "#B7BFFF",
                    400: "#A8B2FF",
                    500: "#97A6FF",
                    600: "#869AFF",
                    700: "#728FFF",
                    800: "#5C83FF",
                    900: "#4078FF",
                },
                neutral: {
                    100: "#E6E7E8",
                    200: "#B6B7BC",
                    300: "#878A92",
                    400: "#71747E",
                    500: "#5C5F6A",
                    600: "#474B57",
                    700: "#333845",
                    800: "#202533",
                    900: "#0E1422",
                },
                // ...
            },
        },
    },
    plugins: [],
};
