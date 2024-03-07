/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                buttonPress: "buttonPress 0.09s linear",
                load: "load 1s ease-out",
            },
            keyframes: {
                buttonPress: {
                    "0%": { transform: "scale(1)", filter: "brightness(1)" },
                    "50%": {
                        transform: "scale(0.95)",
                        filter: "brightness(0.9)",
                    },
                    "100%": { transform: "scale(1)", filter: "brightness(1)" },
                },
                load: {
                    "0%": {
                        transform: "scale(0.25)",
                        opacity: "0%",
                    },
                    "50%": {
                        opacity: "0%",
                    },
                    "100%": {
                        transform: "scale(1))",
                    },
                },
            },
        },
    },
    plugins: [
        createThemes({
            classic: {
                screenText: "#2FF5C7",
                numberBtnBg: "",
                operationBtnBg: "",
                clearBtnBg: "",
                deleteBtnBg: "",
                outerShellBg: "",
            },
            cherry: {
                screenText: "red",
                numberBtnBg: "",
                operationBtnBg: "",
                clearBtnBg: "",
                deleteBtnBg: "",
                outerShellBg: "",
            },
        }),
    ],
};
