import React from "react";
import { useState } from "react";

const Calculator = () => {
    // Text to display on calculator screen
    const [screen, setScreen] = useState("0");
    // Define operand 1
    const [operandOne, setOperandOne] = useState("");
    // Define operand 2
    const [operandTwo, setOperandTwo] = useState("");
    // Define what operation to perform on operands
    const [operation, setOperation] = useState("");

    // If number is large for screen, convert to scientific notation
    if (screen.length > 7) {
        let exponentialScreenFloat = parseFloat(screen).toExponential();
        let exponentialScreenString = exponentialScreenFloat.toString();
        let firstThreeChars = exponentialScreenString.slice(0, 3);
        let exponentVal = exponentialScreenString.slice(-3);
        // If the power of the scientific notation is 100 or above, return error. It is too large to print to screen
        if (!exponentVal.includes("+") && parseFloat(exponentVal) > 99) {
            setScreen("error");
            setOperandOne("");
            setOperandTwo("");
            setOperation("");
            console.log("Cleared op1, op2, operation, and screen = 0");
        }
        // Power is below 3 digits long, okay to print to screen
        else {
            let splitChar = "e";
            let index = exponentialScreenString.indexOf(splitChar);
            if (index !== -1) {
                let after = exponentialScreenString.substring(index); // Extract substring after the split character
                let shortenedString = firstThreeChars + after;
                setScreen(shortenedString);
            }
        }
    }

    // Execute specified operation using two defined operands
    function executeOperation() {
        switch (operation) {
            case "addition": {
                let result = parseFloat(operandOne) + parseFloat(operandTwo);
                return result.toString();
            }
            case "multiply": {
                let result = parseFloat(operandOne) * parseFloat(operandTwo);
                return result.toString();
            }
            case "subtract": {
                let result = parseFloat(operandOne) - parseFloat(operandTwo);
                return result.toString();
            }
            case "divide": {
                let result = parseFloat(operandOne) / parseFloat(operandTwo);
                return result.toString();
            }
            case "mod": {
                let result = parseFloat(operandOne) % parseFloat(operandTwo);
                return result.toString();
            }
        }
    }

    // Set/Update operands on numeric button presses, e.g. push 8 -> screen shows 8, operandOne = 8
    function handleNumberButtonPress(buttonValue) {
        // If screen is anything but 0 AND no operation set
        if (screen !== "0" && operation === "") {
            setScreen(operandOne + buttonValue);
            setOperandOne(operandOne + buttonValue);
            console.log("op1 = ", operandOne + buttonValue);
        }
        // If screen is 0
        else if (screen === "0") {
            setScreen(buttonValue);
            setOperandOne(buttonValue);
            console.log("op1 = ", buttonValue);
        }
        // If an operation is set
        if (operation !== "") {
            setScreen(operandTwo + buttonValue);
            setOperandTwo(operandTwo + buttonValue);
            console.log("op2 = ", operandTwo + buttonValue);
        }
        // If an operation is set and screen is 0
        if (operation !== "" && screen === "0") {
            setScreen(buttonValue);
            setOperandTwo(buttonValue);
            console.log("op2 = ", buttonValue);
        }
    }

    // Define operation on button press, e.g. push x -> multiplication set
    function handleOperationButtonPress(operationButton) {
        // If an operation, operandOne, and operationTwo is set
        if (operation !== "" && operandOne !== "" && operandTwo !== "") {
            let result = executeOperation();
            setOperandOne(result);
            setOperandTwo("");
            setScreen(result);
            setOperation(operationButton);
        }
        // If no operation is set
        else if (operation === "") {
            setOperation(operationButton);
        }
    }

    return (
        // Body
        <div
            id="calc_body"
            className="bg-[#D8D4BD] px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#fffee8ab]"
        >
            <div className="border-[3px] border-[#383838] rounded-b-md bg-[#0E0E0E]">
                <div className="bg-[#060606] sm:p-5 m-5 border-b-[#252525] border-t-[#111111] border-y-4 rounded-md">
                    {/* Screen */}
                    <div
                        id="screen"
                        className="h-14 rounded-md relative my-5 bg-[#060C0A] text-[#2FF5C7]"
                    >
                        {/* Screen Text */}
                        <div
                            className="bottom-1 right-2 absolute sm:text-4xl text-3xl font-bold"
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
