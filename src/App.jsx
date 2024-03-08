import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import "./index.css";

function App() {
    const themes = ["classic", "cherry"];
    const [themeIndex, setThemeIndex] = useState(0);
    const [theme, setTheme] = useState(themes[0]);

    const handleNextTheme = () => {
        // Calculate the next index, wrapping around to 0 if it exceeds the length of the array
        const nextIndex = (themeIndex + 1) % themes.length;
        setThemeIndex(nextIndex);
        setTheme(themes[nextIndex]);
        console.log(`${nextIndex}: ${themes[nextIndex]}`);
    };

    const headingShadow = "heading-shadow-" + theme;

    return (
        <div className={"animate-load" + " " + theme}>
            <div className="my-10">
                <div
                    id="heading"
                    className={
                        "text-4xl text-screenText text-center my-5" +
                        " " +
                        headingShadow
                    }
                >
                    Calculator
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <button
                    className="bg-screenText p-1 rounded-md text-black"
                    onClick={handleNextTheme}
                >
                    {theme}
                </button>
            </div>
            <div className="flex justify-center gap-10">
                <Calculator theme={theme} />
            </div>
            <div id="credit" className="text-center text-xs my-10">
                @ 2024 Seth Klupka. All Rights Reserved.
            </div>
        </div>
    );
}

export default App;
