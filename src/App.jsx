import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import "./index.css";

import { LuCherry } from "react-icons/lu";
import { LuGrape } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";

function App() {
    const themes = ["classic", "cherry", "grape"];
    const icons = [<FaCalculator />, <LuCherry />, <LuGrape />];
    const [themeIndex, setThemeIndex] = useState(0);
    const [theme, setTheme] = useState(themes[0]);
    const [themeIcon, setThemeIcon] = useState();
    const [history, setHistory] = useState([]);

    const handleNextTheme = () => {
        // Calculate the next index, wrapping around to 0 if it exceeds the length of the array
        const nextIndex = (themeIndex + 1) % themes.length;
        setThemeIndex(nextIndex);
        setTheme(themes[nextIndex]);
        console.log(`${nextIndex}: ${themes[nextIndex]}`);
    };

    const headingShadow = "heading-shadow-" + theme;
    const iconDrop = "icon-drop-" + theme;

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
                    className={
                        "m-2 text-screenText text-xl active:animate-buttonPress" +
                        " " +
                        headingShadow +
                        " " +
                        iconDrop
                    }
                    onClick={handleNextTheme}
                >
                    {themeIcon}
                </button>
            </div>
            <div className="flex justify-center gap-10">
                <Calculator
                    theme={theme}
                    setHistory={setHistory}
                    history={history}
                />
            </div>
            <div
                id="history"
                className={
                    "flex justify-center flex-col items-center my-10 text-xl text-screenText" +
                    " " +
                    headingShadow
                }
            >
                <div className="mb-5">History</div>
                <div className="sm:w-[366px] w-[302px] bg-outerShellBg px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#ffffff31]">
                    <div className="p-5 pb-0 bg-innerShellBg rounded-b-md border-[3px] border-[#383838]">
                        <div className="p-5 bg-outerScreenBg rounded-md">
                            <div
                                id="history-screen"
                                className="bg-screenBg rounded-md p-5"
                            >
                                <div className="text-xs flex flex-col gap-5">
                                    {history.map((element, id) => {
                                        return (
                                            <div key={id}>
                                                {element[0]} {element[1]}{" "}
                                                {element[2]} = {element[3]}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center rounded-b-md">
                            <button
                                id="clear-history-btn"
                                className="py-1 px-2 my-5 text-base text-clearBtnText bg-clearBtnBg rounded-md ease-in-out border-t-[#ffffff4d] border-b-[#00000034] border-transparent border-[2px] active:animate-buttonPress"
                                onClick={() => {
                                    setHistory([]);
                                    console.log("Cleared: history");
                                }}
                            >
                                CLEAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="credit" className="text-center text-xs my-10">
                @ 2024 Seth Klupka. All Rights Reserved.
            </div>
        </div>
    );
}

export default App;
