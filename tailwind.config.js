/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('./assets/images/heroBg.jpg)",
            },
            screens: {
                xs: { min: "390px", max: "639px" },
                ...defaultTheme.screens,
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                ...defaultTheme.keyframes,
            },
            animation: {
                "fade-in-down": "fade-in-down 0.25s ease-out",
                ...defaultTheme.animation,
            },
        },
    },
    plugins: [],
};
