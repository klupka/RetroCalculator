/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                buttonPress: "buttonPress 0.09s linear",
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
            },
        },
    },
    plugins: [],
};
