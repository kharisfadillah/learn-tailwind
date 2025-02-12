import { useEffect } from "react";

import PropTypes from "prop-types";

const MyItem = ({ label, color }) => {
    return (
        <div className={`${color} p-4 rounded-lg`}>{label}</div>
    );
};

MyItem.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};


export default function Grid() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Grid";
    }, []);

    return (
        <div className="m-auto h-screen bg-white p-4 w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Grid</h1>
            <h2 className="text-xl font-bold underline">Grid Template Column 1</h2>
            <div className="grid grid-cols-4 gap-4">
                <MyItem label="Item 1" color="bg-emerald-300" />
                <MyItem label="Item 2" color="bg-red-300" />
                <MyItem label="Item 3" color="bg-yellow-300" />
                <MyItem label="Item 4" color="bg-lime-300" />
                <MyItem label="Item 5" color="bg-green-300" />
                <MyItem label="Item 6" color="bg-indigo-300" />
                <MyItem label="Item 7" color="bg-teal-300" />
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Template Column 2</h2>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-emerald-300 p-4 rounded-lg">Item 1</div>
                <div className="bg-red-300 p-4 rounded-lg">Item 2</div>
                <div className="bg-yellow-300 p-4 rounded-lg">Item 3</div>
                <div className="bg-lime-300 p-4 rounded-lg">Item 4</div>
                <div className="bg-green-300 p-4 rounded-lg">Item 5</div>
                <div className="grid grid-cols-subgrid gap-4 col-span-3">
                    <div className="col-start-3 bg-red-300 p-4 rounded-lg">Item 6</div>
                </div>

            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Column Start / End</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-300 p-4 rounded-lg">01</div>
                <div className="bg-green-300 p-4 rounded-lg">02</div>
                <div className="bg-red-300 p-4 rounded-lg">03</div>
                <div className="col-span-2 bg-amber-300 p-4 rounded-lg">04</div>
                <div className="bg-teal-300 p-4 rounded-lg">05</div>
                <div className="bg-sky-400 p-4 rounded-lg">06</div>
                <div className="col-span-2 bg-cyan-300 p-4 rounded-lg">07</div>
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Template Row 1</h2>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <MyItem label="Item 1" color="bg-emerald-300" />
                <MyItem label="Item 2" color="bg-red-300" />
                <MyItem label="Item 3" color="bg-yellow-300" />
                <MyItem label="Item 4" color="bg-lime-300" />
                <MyItem label="Item 5" color="bg-green-300" />
                <MyItem label="Item 6" color="bg-indigo-300" />
                <MyItem label="Item 7" color="bg-teal-300" />
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Template Row 2</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="bg-emerald-300 p-4 rounded-lg">01</div>
                <div className="bg-green-300 p-4 rounded-lg">02</div>
                <div className="bg-red-300 p-4 rounded-lg">03</div>
                <div className="bg-amber-300 p-4 rounded-lg">04</div>
                <div className="bg-teal-300 p-4 rounded-lg">05</div>
                <div className="grid grid-rows-subgrid gap-4 row-span-3">
                    <div className="row-start-2 bg-zinc-300 p-4 rounded-lg">06</div>
                </div>
                <div className="bg-cyan-300 p-4 rounded-lg">07</div>
                <div className="bg-green-300 p-4 rounded-lg">08</div>
                <div className="bg-indigo-300 p-4 rounded-lg">09</div>
                <div className="bg-cyan-300 p-4 rounded-lg">10</div>
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Row Start / End</h2>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 bg-cyan-300 p-4 rounded-lg text-center">01</div>
                <div className="col-span-2 bg-cyan-500 p-4 rounded-lg text-center">02</div>
                <div className="row-span-2 col-span-2 bg-cyan-700 p-4 rounded-lg text-center">03</div>
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Auto Flow</h2>
            <div className="grid grid-cols-3 grid-flow-row gap-4">
                <div className="bg-blue-500 p-4">1</div>
                <div className="bg-blue-500 p-4">2</div>
                <div className="bg-blue-500 p-4">3</div>
                <div className="bg-blue-500 p-4">4</div>
                <div className="bg-blue-500 p-4">5</div>
            </div>
            <div className="grid grid-cols-3 grid-flow-col gap-4">
                <div className="bg-red-500 p-4">1</div>
                <div className="bg-red-500 p-4">2</div>
                <div className="bg-red-500 p-4">3</div>
                <div className="bg-red-500 p-4">4</div>
                <div className="bg-red-500 p-4">5</div>
            </div>
            <h2 className="mt-4 text-xl font-bold underline">Grid Auto Columns</h2>
            <div className="grid grid-flow-col gap-4">
                <div className="bg-blue-500 p-4">Short</div>
                <div className="bg-green-500 p-4">A bit longer text</div>
                <div className="bg-red-500 p-4">This is the longest text here</div>
            </div>
            <div className="mt-2 grid grid-flow-col auto-cols-max gap-4">
                <div className="bg-blue-500 p-4">Short</div>
                <div className="bg-green-500 p-4">A bit longer text</div>
                <div className="bg-red-500 p-4">This is the longest text here</div>
            </div>
        </div>

    );
}