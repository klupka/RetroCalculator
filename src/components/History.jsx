import { useEffect } from "react";
import React from "react";

const History = ({
    headingShadow,
    history,
    setHistory,
    showHistory,
    theme,
    closeAnimation,
}) => {
    useEffect(() => {
        var historyScreen = document.getElementById("history-screen");
        historyScreen.scrollTop = historyScreen.scrollHeight;
    }, [history, showHistory]);

    let historyShowState = "hidden";
    if (showHistory) {
        historyShowState = "visible";
    }

    const textShadow = " text-shadow-" + theme;

    const containerClassName = `${historyShowState} ${closeAnimation}`; //md:animate-history animate-mobileHistory
    console.log(containerClassName);

    return (
        <div className={containerClassName}>
            <div
                id="history"
                className={
                    "flex justify-center text-xl text-screenText" +
                    " " +
                    headingShadow
                }
            >
                <div className="sm:w-[364.67px] w-[302px] bg-outerShellBg px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#ffffff31]">
                    <div className="p-5 pb-0 bg-innerShellBg rounded-b-md border-[3px] border-[#383838]">
                        <div className="p-5 bg-outerScreenBg border-b-[#ffffff2a] border-t-[#ffffff15] border-y-4 rounded-md">
                            <div
                                id="history-screen"
                                className="bg-screenBg rounded-md p-5 md:h-[425px] h-[306px] overflow-y-scroll overflow-x-hidden" // 426 height
                            >
                                <div
                                    className={
                                        "flex justify-center mb-5 text-base" +
                                        textShadow
                                    }
                                >
                                    History
                                </div>
                                <div
                                    className={
                                        "text-xs flex flex-col gap-5" +
                                        textShadow
                                    }
                                >
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
        </div>
    );
};

export default History;
