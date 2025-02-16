import { useState } from "react";

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <div className="mb-4 p-4 text-right bg-gray-200 rounded text-xl font-mono">{input}</div>
                <div className="grid grid-cols-4 gap-1">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((item) => (
                        <button
                            key={item}
                            className="p-4 bg-gray-300 rounded-full text-xl font-bold hover:bg-gray-400"
                            onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
                        >
                            {item}
                        </button>
                    ))}
                    <button className="col-span-4 p-4 bg-red-500 text-white rounded font-bold hover:bg-red-600" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
