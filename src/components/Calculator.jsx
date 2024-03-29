import React from "react";
import { useState } from "react";

const Calculator = ({ theme, setHistory, history, calcMoveAnimation }) => {
    // Text to display on calculator screen
    const [screen, setScreen] = useState("0");
    // Define operand 1
    const [operandOne, setOperandOne] = useState("");
    // Define operand 2
    const [operandTwo, setOperandTwo] = useState("");
    // Define what operation to perform on operands
    const [operation, setOperation] = useState("");

    const [repeatOperation, setRepeatOperation] = useState([]);

    // If number is large for screen, convert to scientific notation
    if (screen.length > 8) {
        let exponentialScreenFloat = parseFloat(screen).toExponential();
        let exponentialScreenString = exponentialScreenFloat.toString();
        let indexOfE = exponentialScreenString.indexOf("e");
        let coefficient = exponentialScreenString.substring(0, indexOfE);

        let firstThreeChars = coefficient.slice(0, 3);
        if (exponentialScreenString.slice(0, 1) === "-") {
            firstThreeChars = coefficient.slice(0, 4);
        }

        let exponentVal = exponentialScreenString.slice(-3);
        // If the power of the scientific notation is 100 or above, return error. It is too large to print to screen
        if (!exponentVal.includes("+") && parseFloat(exponentVal) > 99) {
            setScreen("error");
            setOperandOne("");
            setOperandTwo("");
            setOperation("");
            setRepeatOperation([]);
            console.log(
                "Cleared: op1, op2, operation, screen, repeatOperation"
            );
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

    // Remove unnecessary zeros to maximize usable screen space
    function removeTrailingZeros(numberString) {
        // Check if the string has a decimal point
        if (numberString.includes(".")) {
            // Remove unnecessary trailing zeros. Also converts to whole number if possible. e.g., 2.50 -> 2.5 / 2.00 -> 2
            const regex = /\.?0+$/;
            return numberString.replace(regex, "");
        }

        return numberString;
    }

    // Execute specified operation using two defined operands
    function executeOperation(operandOne, operandTwo, operation) {
        console.log("executeOperation:", operandOne, operation, operandTwo);
        // Handle each operation and format to 3 decimal places
        switch (operation) {
            case "addition": {
                let result = (
                    parseFloat(operandOne) + parseFloat(operandTwo)
                ).toFixed(4);
                result = removeTrailingZeros(result);
                return result.toString();
            }
            case "multiply": {
                let result = (
                    parseFloat(operandOne) * parseFloat(operandTwo)
                ).toFixed(4);
                result = removeTrailingZeros(result);
                return result.toString();
            }
            case "subtract": {
                let result = (
                    parseFloat(operandOne) - parseFloat(operandTwo)
                ).toFixed(4);
                result = removeTrailingZeros(result);
                return result.toString();
            }
            case "divide": {
                let result = (
                    parseFloat(operandOne) / parseFloat(operandTwo)
                ).toFixed(4);
                result = removeTrailingZeros(result);
                return result.toString();
            }
            case "mod": {
                let result = (
                    parseFloat(operandOne) % parseFloat(operandTwo)
                ).toFixed(4);
                result = removeTrailingZeros(result);
                return result.toString();
            }
        }
    }

    // Set/Update operands on numeric button presses, e.g. push 8 -> screen shows 8, operandOne = 8
    function handleNumberButtonPress(buttonValue) {
        // (operandOne / no operation)
        // If the screen is 0, and no operation, your next input with replace the 0
        if (screen === "0" && operation === "") {
            setScreen(buttonValue);
            setOperandOne(buttonValue);
            console.log("op1 = ", buttonValue);
        }
        // (operandOne / no operation)
        // If the screen is not 0, and no operation, your next input will be appended.
        else if (screen !== "0" && operation === "") {
            setScreen(operandOne + buttonValue);
            setOperandOne(operandOne + buttonValue);
            console.log(
                `op1 = ${operandOne + buttonValue} | appended ${buttonValue}`
            );
        }
        // (operandTwo / operation set)
        // If the screen is 0, and operation is set, your next input with replace the 0
        if (screen === "0" && operation !== "") {
            setScreen(buttonValue);
            setOperandTwo(buttonValue);
            console.log("op2 = ", buttonValue);
        }
        // (operandTwo / operation set)
        // If the screen is not 0, and operation is set, your next input will be appended.
        else if (screen !== "" && operation !== "") {
            setScreen(operandTwo + buttonValue);
            setOperandTwo(operandTwo + buttonValue);
            console.log(
                `op2 = ${operandTwo + buttonValue} | appended ${buttonValue}`
            );
        }
    }

    const updateHistory = (newOperationHistory) => {
        switch (newOperationHistory[1]) {
            case "addition": {
                newOperationHistory[1] = "+";
                break;
            }
            case "multiply": {
                newOperationHistory[1] = "x";
                break;
            }
            case "subtract": {
                newOperationHistory[1] = "-";
                break;
            }
            case "divide": {
                newOperationHistory[1] = "/";
                break;
            }
            case "mod": {
                newOperationHistory[1] = "%";
                break;
            }
        }
        // Create a copy of the 2D array and push the new sub-array
        const updatedHistory = [...history];
        updatedHistory.push(newOperationHistory);
        // Update the state with the new 2D array
        setHistory(updatedHistory);
    };

    // Define operation on button press, e.g. push x -> multiplication set
    function handleOperationButtonPress(operationButton) {
        if (operandOne === "" && operation === "" && screen === "0") {
            console.log("op1 = 0");
            setOperandOne("0");
            setOperation(operationButton);
        } else if (operandOne !== "") {
            console.log("op1 not empty", operandOne);
            setRepeatOperation([]);
            // If an operation, operandOne, and operationTwo is set
            if (operation !== "" && operandOne !== "" && operandTwo !== "") {
                let result = executeOperation(
                    operandOne,
                    operandTwo,
                    operation
                );

                // Update history
                let newOperationHistory = [
                    operandOne,
                    operation,
                    operandTwo,
                    result,
                ];
                updateHistory(newOperationHistory);

                setOperandOne(result);
                setOperandTwo("");
                setScreen(result);
                setOperation(operationButton);
            }
            // If no operation is set
            // was: else if (operation === "") {
            else {
                setOperation(operationButton);
            }
        }
    }

    const textShadow = " text-shadow-" + theme;

    return (
        // Body
        <div className={theme + " z-10 " + calcMoveAnimation}>
            <div
                id="calc_body"
                className="bg-outerShellBg px-5 rounded-xl pb-5 border-4 border-t-0 border-b-0 border-[#ffffff31]"
            >
                <div className="border-[3px] border-[#ffffff2a] rounded-b-md bg-innerShellBg">
                    <div className="bg-outerScreenBg sm:p-5 m-5 border-b-[#ffffff2a] border-t-[#ffffff15] border-y-4 rounded-md">
                        <div
                            id="screen"
                            className="h-14 rounded-md relative my-5 bg-screenBg text-screenText"
                        >
                            {/* Screen Text */}
                            <div
                                className={
                                    "bottom-1 right-2 absolute sm:text-[2rem] text-3xl font-bold" +
                                    textShadow
                                }
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
                                className="bg-clearBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-clearBtnText text-lg w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    setScreen("0");
                                    setOperandOne("");
                                    setOperandTwo("");
                                    setOperation("");
                                    setRepeatOperation([]);

                                    console.log(
                                        "Cleared: op1, op2, operation, screen, repeatOperation"
                                    );
                                }}
                            >
                                C
                            </button>
                            <button
                                className="bg-delBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-delBtnText text-base w-10 h-10 sm:h-14 sm:w-14"
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
                                            console.log(
                                                "op1 = ",
                                                newScreenValue
                                            );
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
                                            console.log(
                                                "op2 = ",
                                                newScreenValue
                                            );
                                        }
                                    }
                                }}
                            >
                                DEL
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-lg w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const operationButton = "mod";
                                    handleOperationButtonPress(operationButton);
                                }}
                            >
                                %
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-lg w-10 h-10 sm:h-14 sm:w-14"
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
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "7";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                7
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "8";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                8
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "9";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                9
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
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
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "4";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                4
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "5";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                5
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "6";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                6
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
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
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "1";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                1
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "2";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                2
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "3";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                3
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
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
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    // If operandOne AND operandTwo are empty AND operandOne does not include a period
                                    if (
                                        operandTwo === "" &&
                                        operation === "" &&
                                        !operandOne.includes(".")
                                    ) {
                                        // If operandOne is empty, then display on screen "0."
                                        if (operandOne === "") {
                                            setScreen("0" + ".");
                                            setOperandOne("0" + ".");
                                            console.log("op1 = ", "0" + ".");
                                        }
                                        // If operandOne is not empty, then append "." onto existing screen value
                                        else if (operandOne !== "") {
                                            setScreen(screen + ".");
                                            setOperandOne(screen + ".");
                                            console.log("op1 = ", screen + ".");
                                        }
                                    }
                                    // If operandOne AND operation are not empty AND operandTwo does not include a period
                                    if (
                                        operandOne !== "" &&
                                        operation !== "" &&
                                        !operandTwo.includes(".")
                                    ) {
                                        // If operandTwo is empty, then display on screen "0."
                                        if (operandTwo === "") {
                                            setScreen("0" + ".");
                                            setOperandTwo("0" + ".");
                                            console.log("op2 = ", "0" + ".");
                                        }
                                        // If operandTwo is not empty, then append "." onto existing screen value
                                        else if (operandTwo !== "") {
                                            setScreen(screen + ".");
                                            setOperandTwo(screen + ".");
                                            console.log("op2 = ", screen + ".");
                                        }
                                    }
                                }}
                            >
                                .
                            </button>
                            <button
                                className="bg-numberBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-xl  w-10 h-10 sm:h-14 sm:w-14"
                                onClick={() => {
                                    const buttonValue = "0";
                                    handleNumberButtonPress(buttonValue);
                                }}
                            >
                                0
                            </button>
                            <button
                                className="bg-operationBtnBg border-t-[#ffffff4d] border-b-[#00000034] border-transparent text-btnText text-lg w-[96px] h-10 sm:h-14 sm:w-[128px]"
                                onClick={() => {
                                    if (
                                        operandOne !== "" &&
                                        operandTwo !== "" &&
                                        repeatOperation.length === 0
                                    ) {
                                        let result = executeOperation(
                                            operandOne,
                                            operandTwo,
                                            operation
                                        );

                                        // Update history
                                        let newOperationHistory = [
                                            operandOne,
                                            operation,
                                            operandTwo,
                                            result,
                                        ];
                                        updateHistory(newOperationHistory);

                                        setOperandOne(result);
                                        setOperandTwo("");
                                        setScreen(result);
                                        setOperation("");
                                        setRepeatOperation([
                                            operation,
                                            operandTwo,
                                        ]);
                                    } else if (repeatOperation.length !== 0) {
                                        console.log(
                                            "repeatOperation: op2 =",
                                            repeatOperation[1]
                                        );

                                        let result = executeOperation(
                                            operandOne,
                                            repeatOperation[1],
                                            repeatOperation[0]
                                        );

                                        // Update history
                                        let newOperationHistory = [
                                            operandOne,
                                            repeatOperation[0],
                                            repeatOperation[1],
                                            result,
                                        ];
                                        updateHistory(newOperationHistory);

                                        setOperandOne(result);
                                        setScreen(result);
                                    }
                                }}
                            >
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
