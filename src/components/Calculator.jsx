import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [screen, setScreen] = useState("0");
    const [operandOne, setOperandOne] = useState("");
    const [operandTwo, setOperandTwo] = useState("");
    const [operation, setOperation] = useState("");

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
                let result = addition(operandOne, operandTwo);
                return result.toString();
            }
            if (operation === "multiply") {
                let result = multiply(operandOne, operandTwo);
                return result.toString();
            }
            if (operation === "subtract") {
                let result = subtract(operandOne, operandTwo);
                return result.toString();
            }
            if (operation === "divide") {
                let result = divide(operandOne, operandTwo);
                return result.toString();
            }
            if (operation === "mod") {
                let result = mod(operandOne, operandTwo);
                return result.toString();
            }
        }
    }

    function handleNumberButtonPress(buttonValue) {
        if (screen !== "0" && operation === "") {
            setScreen(operandOne + buttonValue);
            setOperandOne(operandOne + buttonValue);
            console.log("op1 = ", operandOne + buttonValue);
        } else if (screen === "0") {
            setScreen(buttonValue);
            setOperandOne(buttonValue);
            console.log("op1 = ", buttonValue);
        }
        if (operation !== "") {
            setScreen(operandTwo + buttonValue);
            setOperandTwo(operandTwo + buttonValue);
            console.log("op2 = ", operandTwo + buttonValue);
        }
        if (operation !== "" && screen === "0") {
            setScreen(buttonValue);
            setOperandTwo(buttonValue);
            console.log("op2 = ", buttonValue);
        }
    }

    function handleOperationButtonPress(operationButton) {
        if (operation !== "" && operandOne !== "" && operandTwo !== "") {
            let result = executeOperation();
            setOperandOne(result);
            setOperandTwo("");
            setScreen(result);
            setOperation(operationButton);
        } else if (operation === "") {
            setOperation(operationButton);
        }
    }

    return (
        // Body
        <div className="bg-[#D8D4BD] px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#fffee8ab]">
            <div
                className="border-[3px] border-[#383838] rounded-b-md bg-[#0E0E0E]"
                id="calc_body"
            >
                <div className="bg-[#060606] p-5 m-5 border-b-[#252525] border-t-[#111111] border-y-4 rounded-md">
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
                    className="[&>div>button]:border-[2px] [&>div>button]:rounded-md [&>div>button]:m-2 p-3 [&>div>button]:transition [&>div>button]:ease-in-out [&>div>button:active]:animate-buttonPress"
                    id="buttons"
                >
                    {/* Buttons: Row 0 */}
                    <div>
                        <button
                            className="bg-[#DA7247] border-t-[#FBA57C] border-b-[#a75837] border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                setScreen("0");
                                setOperandOne("");
                                setOperandTwo("");
                                setOperation("");

                                console.log(
                                    "Cleared op1, op2, operation, and screen = 0"
                                );
                            }}
                        >
                            C
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#DA7247] text-base w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                if (operandTwo === "" && operation === "") {
                                    if (screen !== "0") {
                                        let tempScreenValue = screen.slice(
                                            0,
                                            -1
                                        );
                                        let newScreenValue = "";
                                        if (tempScreenValue === "") {
                                            newScreenValue = "0";
                                        } else {
                                            newScreenValue = screen.slice(
                                                0,
                                                -1
                                            );
                                        }
                                        setScreen(newScreenValue);
                                        setOperandOne(newScreenValue);
                                        console.log("op1 = ", newScreenValue);
                                    }
                                } else if (
                                    operandOne !== "" &&
                                    operation !== ""
                                ) {
                                    if (screen !== "0") {
                                        let tempScreenValue = screen.slice(
                                            0,
                                            -1
                                        );
                                        let newScreenValue = "";
                                        if (tempScreenValue === "") {
                                            newScreenValue = "0";
                                        } else {
                                            newScreenValue = screen.slice(
                                                0,
                                                -1
                                            );
                                        }
                                        setScreen(newScreenValue);
                                        setOperandTwo(newScreenValue);
                                        console.log("op2 = ", newScreenValue);
                                    }
                                }
                            }}
                        >
                            DEL
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const operationButton = "mod";
                                handleOperationButtonPress(operationButton);
                            }}
                        >
                            %
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-lg w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const operationButton = "divide";
                                handleOperationButtonPress(operationButton);
                            }}
                        >
                            /
                        </button>
                    </div>
                    {/* Buttons: Row 1 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "7";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            7
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "8";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            8
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "9";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            9
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const operationButton = "multiply";
                                handleOperationButtonPress(operationButton);
                            }}
                        >
                            x
                        </button>
                    </div>
                    {/* Buttons: Row 2 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "4";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            4
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "5";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            5
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "6";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            6
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const operationButton = "subtract";
                                handleOperationButtonPress(operationButton);
                            }}
                        >
                            -
                        </button>
                    </div>
                    {/* Buttons: Row 3 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "1";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            1
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "2";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            2
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "3";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            3
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const operationButton = "addition";
                                handleOperationButtonPress(operationButton);
                            }}
                        >
                            +
                        </button>
                    </div>
                    {/* Buttons: Row 4 */}
                    <div>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                // NEEDS FIXING
                                if (operandTwo === "" && operation === "") {
                                    setScreen(screen + ".");
                                    setOperandOne(screen + ".");
                                    console.log("op1 = ", screen + ".");
                                } else if (
                                    operandOne !== "" &&
                                    operation !== ""
                                ) {
                                    setScreen(screen + ".");
                                    setOperandTwo(screen + ".");
                                    console.log("op2 = ", screen + ".");
                                }
                            }}
                        >
                            .
                        </button>
                        <button
                            className="bg-[#e7e6db] border-t-[#FAFBF2] border-b-[#bdbcb4] border-transparent text-[#25251D] text-xl  w-10 h-10 sm:h-14 sm:w-14"
                            onClick={() => {
                                const buttonValue = "0";
                                handleNumberButtonPress(buttonValue);
                            }}
                        >
                            0
                        </button>
                        <button
                            className="bg-[#5A9FAE] border-t-[#A5DFE9] border-b-[#427480] border-transparent text-[#25251D] text-lg w-[96px] h-10 sm:h-14 sm:w-[128px]"
                            onClick={() => {
                                if (operandOne !== "" && operandTwo != "") {
                                    let result = executeOperation();
                                    setOperandOne(result);
                                    setOperandTwo("");
                                    setScreen(result);
                                    setOperation("");
                                }
                            }}
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
