import { useEffect } from "react";

export default function Spacing() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Spacing";
    }, []);

    return (
        <div className="m-auto h-screen w-4/5 bg-slate-100 p-4 md:w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Spacing</h1>
            <h1 className="text-xl font-bold underline">Padding</h1>
            <div className="flex bg-black">
                <div className="bg-red-100 pt-6">pt-6</div>
                <div className="bg-green-100 pr-4">pr-4</div>
                <div className="bg-blue-100 pb-8">pb-8</div>
                <div className="bg-yellow-200 pl-2">pl-2</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Margin</h1>
            <div className="flex bg-black">
                <div className="bg-red-100 mt-6">mt-6</div>
                <div className="bg-green-100 mr-4">mr-4</div>
                <div className="bg-blue-100 mb-8">mb-8</div>
                <div className="bg-yellow-200 ml-2">ml-2</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Space Between</h1>
            <div className="flex bg-black space-x-4">
                <div className="bg-red-100 p-2">1</div>
                <div className="bg-green-100 p-2">2</div>
                <div className="bg-blue-100 p-2">3</div>
                <div className="bg-yellow-200 p-2">4</div>
            </div>
        </div>
    );
}