import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="animate-load classic">
            <div className="my-10">
                <div
                    id="heading"
                    className="text-4xl text-screenText text-center my-5"
                >
                    Calculator
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <Calculator />
            </div>
            <div id="credit" className="text-center text-xs my-10">
                @ 2024 Seth Klupka. All Rights Reserved.
            </div>
        </div>
    );
}

export default App;
