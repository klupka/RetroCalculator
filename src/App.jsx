import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="animate-load">
            <div className="my-10">
                <div
                    id="heading"
                    className="text-4xl text-[#2FF5C7] text-center my-5"
                >
                    Calculator
                </div>
                <div id="credit" className="text-center text-sm">
                    by Seth Klupka
                </div>
            </div>
            <div className="flex justify-center gap-10">
                <Calculator />
            </div>
        </div>
    );
}

export default App;
