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
                screenBg: "#060C0A",
                outerScreenBg: "#060606",
                numberBtnBg: "#e7e6db",
                operationBtnBg: "#5A9FAE",
                clearBtnBg: "#DA7247",
                clearBtnText: "#e7e6db",
                delBtnBg: "#e7e6db",
                delBtnText: "#DA7247", // Same as clearBtnBg
                innerShellBg: "#0E0E0E",
                outerShellBg: "#D8D4BD",
                btnText: "#25251D",
            },
            cherry: {
                screenText: "#FFFFFF",
                screenBg: "#160002",
                outerScreenBg: "#080105",
                numberBtnBg: "#575853",
                operationBtnBg: "#BB4C4B",
                clearBtnBg: "#C4C7B6",
                clearBtnText: "#575853",
                delBtnBg: "#C4C7B6",
                delBtnText: "#BB4C4B", // Same as clearBtnBg
                innerShellBg: "#0E0E0E",
                outerShellBg: "#0E0E0E",
                btnText: "#E5E5E2",
            },
        }),
    ],
};
