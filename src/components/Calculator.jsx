import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [screen, setScreen] = useState("0");
    const [operandOne, setOperandOne] = useState("");
    const [operation, setOperation] = useState("");
    let currScreen = screen;
    let tempScreen;

    function addition(opOne, opTwo) {
        const result = parseFloat(opOne) + parseFloat(opTwo);
        return result;
    }

    function multiply(opOne, opTwo) {
        const result = parseFloat(opOne) * parseFloat(opTwo);
        return result;
    }

    function subtract(opOne, opTwo) {
        const result = parseFloat(opOne) - parseFloat(opTwo);
        return result;
    }

    function divide(opOne, opTwo) {
        const result = parseFloat(opOne) / parseFloat(opTwo);
        return result;
    }

    function mod(opOne, opTwo) {
        const result = parseFloat(opOne) % parseFloat(opTwo);
        return result;
    }

    function executeOperation() {
        if (operation) {
            if (operation === "addition") {
                console.log("op1", operandOne);
                console.log("op2", screen);
                let result = addition(operandOne, screen);
                setScreen(result.toString());
                setOperation("");
            }
            if (operation === "multiply") {
                // console.log("op1", operandOne);
                // console.log("op2", screen);
                console.log("multiply executed");
                let result = multiply(operandOne, screen);
                setScreen(result.toString());
                setOperation("");
            }
            if (operation === "subtract") {
                console.log("op1", operandOne);
                console.log("op2", screen);
                let result = subtract(operandOne, screen);
                setScreen(result.toString());
                setOperation("");
            }
            if (operation === "divide") {
                console.log("op1", operandOne);
                console.log("op2", screen);
                let result = divide(operandOne, screen);
                setScreen(result.toString());
                setOperation("");
            }
            if (operation === "mod") {
                let result = mod(operandOne, screen);
                setScreen(result.toString());
                setOperation("");
            }
        }
    }

    return (
        // Body
        <div className="bg-[#D8D4BD] px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#fffee8ab]">
            <div
                className="border-[3px] border-[#383838] rounded-b-md bg-[#0E0E0E]"
                id="calc_body"
            >
                <div className="bg-[#060606] p-5 m-5 border-[#383838] border-b-4 rounded-md">
                    {/* Screen */}
                    <div
                        id="screen"
                        className="h-14 rounded-md relative m-5 bg-[#060C0A] text-[#2FF5C7]"
                    >
                        {/* Screen Text */}
                        <div
                            className="bottom-1 right-2 absolute text-4xl font-bold"
                            id="screen_text"
                        >
                            {screen}
                        </div>
                    </div>
                </div>
                {/* Buttons */}
                <div
                    className="[&>div>button]:border-[2px] [&>div>button]:rounded-md [&>div>button]:m-2 p-3 "
                    id="buttons"
                >
                    {/* Buttons: Row 0 */}
                    <div>
                        <button
                            className="bg-[#DA7247] border-t-[#FBA57C] border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setScreen("0");
                            }}
                        >
                            C
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#DA7247] text-base w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = currScreen.slice(0, -1);
                                    setScreen(currScreen);
                                }
                            }}
                        >
                            DEL
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setOperandOne(screen);
                                setOperation("mod");
                                setScreen("0");
                            }}
                        >
                            %
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] w-14 border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setOperandOne(screen);
                                setOperation("divide");
                                setScreen("0");
                            }}
                        >
                            /
                        </button>
                    </div>
                    {/* Buttons: Row 1 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "7";
                                } else {
                                    currScreen = "7";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            7
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "8";
                                } else {
                                    currScreen = "8";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            8
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "9";
                                } else {
                                    currScreen = "9";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            9
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-transparent text-[#25251D] w-14 text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setOperandOne(screen);
                                setOperation("multiply");
                                console.log("multiply set");
                                setScreen("0");
                            }}
                        >
                            x
                        </button>
                    </div>
                    {/* Buttons: Row 2 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "4";
                                } else {
                                    currScreen = "4";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            4
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "5";
                                } else {
                                    currScreen = "5";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            5
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "6";
                                } else {
                                    currScreen = "6";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            6
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setOperandOne(screen);
                                setOperation("subtract");
                                setScreen("0");
                            }}
                        >
                            -
                        </button>
                    </div>
                    {/* Buttons: Row 3 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "1";
                                } else {
                                    currScreen = "1";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            1
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "2";
                                } else {
                                    currScreen = "2";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            2
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "3";
                                } else {
                                    currScreen = "3";
                                }
                                setScreen(currScreen);
                            }}
                        >
                            3
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setOperandOne(screen);
                                setOperation("addition");
                                setScreen("0");
                            }}
                        >
                            +
                        </button>
                    </div>
                    {/* Buttons: Row 4 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (!screen.includes(".")) {
                                    currScreen = screen + ".";
                                    setScreen(currScreen);
                                }
                            }}
                        >
                            .
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (screen !== "0") {
                                    currScreen = screen + "0";
                                    setScreen(currScreen);
                                }
                            }}
                        >
                            0
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-transparent text-[#25251D] text-lg w-[96px] h-10 sm:h-14 sm:w-[128px]"
                            onClick={executeOperation}
                        >
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
