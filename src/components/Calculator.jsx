import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [screen, setScreen] = useState("0");
    const [operandOne, setOperandOne] = useState("");
    const [operation, setOperation] = useState("");
    let currScreen = screen;

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

    return (
        // Body
        <div className="border-red-500 border-2 rounded-md">
            {/* Screen */}
            <div className="border-red-500 border-2 h-24 rounded-md relative m-5">
                {/* Screen Text */}
                <div className="bottom-1 right-2 absolute text-6xl font-bold">
                    {screen}
                </div>
            </div>
            {/* Buttons */}
            <div className="[&>div>button]:border-2 [&>div>button]:border-red-500 [&>div>button]:h-14 [&>div>button:not(:last-child)]:w-14 [&>div>button]:rounded-md [&>div>button]:m-2 text-xl font-bold p-3">
                {/* Buttons: Row 0 */}
                <div>
                    <button
                        onClick={() => {
                            setScreen("0");
                        }}
                    >
                        C
                    </button>
                    <button
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
                        onClick={() => {
                            setOperandOne(screen);
                            setOperation("mod");
                            setScreen("0");
                        }}
                    >
                        %
                    </button>
                    <button
                        className="w-14"
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
                        className="w-14"
                        onClick={() => {
                            setOperandOne(screen);
                            setOperation("multiply");
                            setScreen("0");
                        }}
                    >
                        *
                    </button>
                </div>
                {/* Buttons: Row 2 */}
                <div>
                    <button
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
                        className="w-14"
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
                        className="w-14"
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
                        className="w-[128px]"
                        onClick={() => {
                            if (operation) {
                                if (operation === "addition") {
                                    console.log("op1", operandOne);
                                    console.log("op2", screen);
                                    let result = addition(operandOne, screen);
                                    setScreen(result.toString());
                                }
                                if (operation === "multiply") {
                                    console.log("op1", operandOne);
                                    console.log("op2", screen);
                                    let result = multiply(operandOne, screen);
                                    setScreen(result.toString());
                                }
                                if (operation === "subtract") {
                                    console.log("op1", operandOne);
                                    console.log("op2", screen);
                                    let result = subtract(operandOne, screen);
                                    setScreen(result.toString());
                                }
                                if (operation === "divide") {
                                    console.log("op1", operandOne);
                                    console.log("op2", screen);
                                    let result = divide(operandOne, screen);
                                    setScreen(result.toString());
                                }
                                if (operation === "mod") {
                                    console.log("op1", operandOne);
                                    console.log("op2", screen);
                                    let result = mod(operandOne, screen);
                                    setScreen(result.toString());
                                }
                            }
                        }}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
