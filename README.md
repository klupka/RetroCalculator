# Retro Calculator

🔗 <a href="https://klupka.github.io/calculator/">Retro Calculator</a>

## Description

-   A calculator web app featuring a custom-designed user interface that evokes a nostalgic feel of the 1970s era while also including some modern additions.
-   Developed using Vite + React, this project was undertaken without relying on any calculator-related tutorials or guides, representing a self-imposed challenge.

## Usage

-   To maintain authenticity, the calculator features a limited display capacity. This trait is reminiscent of older calculators (~1970s), which served as inspiration.
    -   Calculation results are fixed to 4 decimal places and if a number exceeds 7 characters it is converted to scientific notation.
    -   If a number's power exceeds 99, the calculator will return an error (e.g., 2.3e+102 -> ERROR). At this point the number is too large to display.
-   **Operations** - Modulo, Division, Multiplication, Subtraction, and Addition.
-   **DEL** - eliminates the rightmost number displayed on the screen.
-   **C** - clears the screen, pending operations, and operands.
-   **Chained operation** - allows users to input a series of operations without needing to press the equals (=) button after each operation.
-   **Repeated operation** - allows users to perform the same operation multiple times consecutively by pressing the equals (=) button repeatedly without re-entering the operands.
-   **History** - a button located at top of page toggles history log in and out of view. Pressing the clear button within the history log will erase all recorded operations. The history feature ensures more precise recording of operations without any character limitations.
-   **Theme** - a button located at top of page switches between four color presets: classic, cherry, grape, and banana.
    <br><br>
    _(For a comprehensive insight into the computations occurring behind the scenes, review your browser's console output.)_
