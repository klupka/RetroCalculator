/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                buttonPress: "buttonPress 0.09s linear",
                load: "load 1s ease-out",
                history: "history 0.5s",
                mobileHistory: "mobileHistory 0.5s",
                historyReversed: "historyReversed 0.5s",
                mobileHistoryReversed: "mobileHistoryReversed 0.5s",
                calcMoveRight: "calcMoveRight 0.5s",
                calcMoveLeft: "calcMoveLeft 0.5s",
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
                history: {
                    "0%": {
                        transform: "scale(0.95) translateX(-150px)",
                        filter: "brightness(0.5)",
                    },
                    "50%": {
                        transform: "scale(0.95) translateX(0px)",
                        filter: "brightness(0.5)",
                    },
                    "100%": {
                        transform: "scale(1)",
                        filter: "brightness(1)",
                    },
                },
                historyReversed: {
                    "0%": {
                        transform: "scale(1)",
                        filter: "brightness(1)",
                        //opacity: "100%",
                    },
                    "50%": {
                        transform: "scale(0.95) translateX(0px)",
                        filter: "brightness(0.5)",
                        // opacity: "100%",
                    },
                    "100%": {
                        transform: "scale(0.95) translateX(-203px)",
                        filter: "brightness(0.5)",
                        // opacity: "100%",
                    },
                },
                mobileHistory: {
                    "0%": {
                        transform: "scale(0.95) translateY(-550px)",
                        filter: "brightness(0.5)",
                    },
                    "50%": {
                        transform: "scale(0.95) translateY(0px)",
                        filter: "brightness(0.5)",
                    },
                    "100%": {
                        transform: "scale(1)",
                        filter: "brightness(1)",
                    },
                },
                mobileHistoryReversed: {
                    "0%": {
                        transform: "scale(1)",
                        filter: "brightness(1)",
                    },
                    "50%": {
                        transform: "scale(0.95) translateY(0px)",
                        filter: "brightness(0.5)",
                    },
                    "100%": {
                        transform: "scale(0.95) translateY(-550px)",
                        filter: "brightness(0.5)",
                    },
                },
                calcMoveRight: {
                    "0%": {
                        transform: "translateX(0px)",
                    },
                    "100%": {
                        transform: "translateX(200px)", //203
                    },
                },
                calcMoveLeft: {
                    "0%": {
                        transform: "translateX(200px)",
                    },
                    "100%": {
                        transform: "translateX(0px)",
                    },
                },
            },
        },
    },
    plugins: [
        createThemes({
            classic: {
                screenText: "#FFFFFF",
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
                iconBg: "#2ff5c7",
            },
            cherry: {
                screenText: "#FFFFFF",
                screenBg: "#0d0001",
                outerScreenBg: "#030001",
                numberBtnBg: "#575853",
                operationBtnBg: "#dc234b",
                clearBtnBg: "#C4C7B6",
                clearBtnText: "#575853",
                delBtnBg: "#C4C7B6",
                delBtnText: "#dc234b", // Same as clearBtnBg
                innerShellBg: "#0E0E0E",
                outerShellBg: "#0E0E0E",
                btnText: "#E5E5E2",
                iconBg: "#dc234b",
            },
            grape: {
                screenText: "#FFFFFF",
                screenBg: "#0a0014",
                outerScreenBg: "#030005",
                numberBtnBg: "#392b40",
                operationBtnBg: "#673280",
                clearBtnBg: "#C4C7B6",
                clearBtnText: "#392b40",
                delBtnBg: "#C4C7B6",
                delBtnText: "#673280", // Same as clearBtnBg
                innerShellBg: "#0d0b0f",
                outerShellBg: "#0c0a0d",
                btnText: "#E5E5E2",
                iconBg: "#890aff",
            },
            banana: {
                screenText: "#FFFFFF",
                screenBg: "#080800",
                outerScreenBg: "#030300",
                numberBtnBg: "#edede1",
                operationBtnBg: "#dbdb53",
                clearBtnBg: "#242421",
                clearBtnText: "#edede1",
                delBtnBg: "#242421",
                delBtnText: "#dbdb53", // Same as clearBtnBg
                innerShellBg: "#141413",
                outerShellBg: "#dbdb53",
                btnText: "#25251D",
                iconBg: "#890aff",
            },
        }),
    ],
};
