import { useEffect } from "react";

export default function Grid() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Grid";
    }, []);

    return (
        <div className="m-auto h-screen bg-white p-4 w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Grid</h1>
            <h2 className="text-xl font-bold underline">Grid Template Column</h2>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-emerald-300 p-4 rounded-lg">Item 1</div>
                <div className="bg-red-300 p-4 rounded-lg">Item 2</div>
                <div className="bg-yellow-300 p-4 rounded-lg">Item 3</div>
                <div className="bg-lime-300 p-4 rounded-lg">Item 4</div>
                <div className="bg-green-300 p-4 rounded-lg">Item 5</div>
                <div className="bg-red-300 p-4 rounded-lg">Item 6</div>
                <div className="bg-teal-300 p-4 rounded-lg">Item 7</div>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-4">
                <div className="bg-emerald-300 p-4 rounded-lg">Item 1</div>
                <div className="bg-red-300 p-4 rounded-lg">Item 2</div>
                <div className="bg-yellow-300 p-4 rounded-lg">Item 3</div>
                <div className="bg-lime-300 p-4 rounded-lg">Item 4</div>
                <div className="bg-green-300 p-4 rounded-lg">Item 5</div>
                <div className="grid grid-cols-subgrid gap-4 col-span-3">
                    <div className="col-start-3 bg-red-300 p-4 rounded-lg">Item 6</div>
                </div>

            </div>
        </div>

    );
}