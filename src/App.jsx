import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import "./index.css";

import { LuCherry } from "react-icons/lu";
import { LuGrape } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";

function App() {
    const themes = ["classic", "cherry", "grape"];
    const icons = [<FaCalculator />, <LuCherry />, <LuGrape />];
    //const themes = ["grape"];
    const [themeIndex, setThemeIndex] = useState(0);
    const [theme, setTheme] = useState(themes[0]);
    const [themeIcon, setThemeIcon] = useState();

    const handleNextTheme = () => {
        // Calculate the next index, wrapping around to 0 if it exceeds the length of the array
        const nextIndex = (themeIndex + 1) % themes.length;
        setThemeIndex(nextIndex);
        setTheme(themes[nextIndex]);
        console.log(`${nextIndex}: ${themes[nextIndex]}`);
    };

    const headingShadow = "heading-shadow-" + theme;

    useEffect(() => {
        setThemeIcon(icons[themeIndex]);
    }, [themeIndex]);

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
                    CALCULATOR
                </div>
            </div>
            <div
                id="heading"
                className={
                    "flex justify-center items-center mb-5 text-xl text-screenText gap-2" +
                    " " +
                    headingShadow
                }
            >
                <div>THEME:</div>
                <button
                    className="bg-iconBg p-2 rounded-full text-black text-base"
                    onClick={handleNextTheme}
                >
                    {themeIcon}
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
