import { useState, useEffect } from "react";
import Calculator from "./components/Calculator";
import History from "./components/History";
import "./index.css";

import { LuCherry } from "react-icons/lu";
import { LuGrape } from "react-icons/lu";
import { LuBanana } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";

import { GrFormViewHide } from "react-icons/gr";
import { GrFormView } from "react-icons/gr";

function App() {
    const themes = ["classic", "cherry", "grape", "banana"];
    const icons = [<FaCalculator />, <LuCherry />, <LuGrape />, <LuBanana />];
    const [themeIndex, setThemeIndex] = useState(0);
    const [theme, setTheme] = useState(themes[0]);
    const [themeIcon, setThemeIcon] = useState();
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);
    const [closeAnimation, setCloseAnimation] = useState("");
    const [calcMoveAnimation, setCalcMoveAnimation] = useState("");

    const handleNextTheme = () => {
        // Calculate the next index, wrapping around to 0 if it exceeds the length of the array
        const nextIndex = (themeIndex + 1) % themes.length;
        setThemeIndex(nextIndex);
        setTheme(themes[nextIndex]);
        console.log(`Changed theme to ${themes[nextIndex]}.`);
    };

    const headingShadow = " heading-shadow-" + theme;
    const iconDrop = " icon-drop-" + theme;

    useEffect(() => {
        setThemeIcon(icons[themeIndex]);
    }, [themeIndex]);

    return (
        <div className={"animate-load" + " " + theme}>
            <div className="my-5">
                <div
                    id="heading"
                    className={
                        "text-4xl text-screenText text-center my-5" +
                        " " +
                        headingShadow
                    }
                >
                    {/* CALCULATOR */}
                </div>
            </div>
            <div className="flex justify-center p-0">
                <div className="flex justify-center items-center gap-5 mb-5">
                    <div
                        id="heading"
                        className={
                            "flex justify-center items-center text-xl text-screenText gap-2" +
                            headingShadow
                        }
                    >
                        <button
                            className={
                                "text-screenText text-base active:animate-buttonPress p-2 flex items-center gap-2 w-[120px] justify-center hover:scale-105 transition-all" +
                                headingShadow +
                                iconDrop
                            }
                            onClick={handleNextTheme}
                        >
                            <div>THEME</div>
                            <div className="text-base">{themeIcon}</div>
                        </button>
                    </div>
                    <div
                        id="heading"
                        className={
                            "flex justify-center items-center text-xl text-screenText gap-2" +
                            headingShadow
                        }
                    >
                        <button
                            className={
                                "text-base active:animate-buttonPress p-2 text-screenText flex items-center gap-2 w-[120px] justify-center hover:scale-105 transition-all" +
                                headingShadow +
                                iconDrop
                            }
                            onClick={() => {
                                if (showHistory) {
                                    // Hide history

                                    setTimeout(() => {
                                        setCalcMoveAnimation(
                                            "md:animate-calcMoveRight"
                                        );
                                    }, 5);
                                    setCloseAnimation(
                                        "md:animate-historyReversed animate-mobileHistoryReversed"
                                    );
                                    setTimeout(() => {
                                        setCloseAnimation("opacity-0");
                                    }, 490);

                                    // Removes a flickering issue when animations don't exactly sync up perfectly
                                    setTimeout(() => {
                                        setCalcMoveAnimation("opacity-0");
                                    }, 500);
                                    setTimeout(() => {
                                        setCalcMoveAnimation("opacity-100");
                                    }, 502);
                                    // End of flicker fix

                                    setTimeout(() => {
                                        setShowHistory(false);
                                    }, 500);
                                } else {
                                    // Show history
                                    setCalcMoveAnimation(
                                        "md:animate-calcMoveLeft"
                                    );
                                    setCloseAnimation(
                                        "md:animate-history animate-mobileHistory"
                                    );
                                    setShowHistory(true);
                                }
                            }}
                        >
                            <div>HISTORY</div>
                            <div className="text-2xl">
                                {showHistory ? (
                                    <GrFormView />
                                ) : (
                                    <GrFormViewHide />
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="flex md:flex-row flex-col items-center justify-center gap-9" /* gap-10*/
            >
                <Calculator
                    theme={theme}
                    setHistory={setHistory}
                    history={history}
                    calcMoveAnimation={calcMoveAnimation}
                />
                <History
                    headingShadow={headingShadow}
                    history={history}
                    setHistory={setHistory}
                    showHistory={showHistory}
                    theme={theme}
                    closeAnimation={closeAnimation}
                />
            </div>
            <div id="credit" className="text-center text-xs my-8">
                @ 2024 Seth Klupka. All Rights Reserved.
            </div>
            {/* The margin for the div above does not work on the bottom, so the div below is a hardcoded method to solve this issue */}
            <div className="text-center text-white opacity-0">.</div>
        </div>
    );
}

export default App;
