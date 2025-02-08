import { useEffect } from "react";

export default function Sizing() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Sizing";
    }, []);

    return (
        <div className="m-auto h-screen bg-white p-4 w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Sizing</h1>
            <h1 className="text-xl font-bold underline">Width</h1>
            <div className="flex flex-col bg-black">
                <div className="w-96 bg-red-100">w-96</div>
                <div className="w-80 bg-red-200">w-80</div>
                <div className="w-64 bg-red-300">w-64</div>
                <div className="w-48 bg-red-400">w-48</div>
                <div className="w-40 bg-red-500">w-40</div>
                <div className="w-32 bg-red-600">w-32</div>
                <div className="w-24 bg-red-700">w-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Min-Width</h1>
            <div className="flex flex-col bg-black w-24">
                <div className="min-w-96 bg-red-100">min-w-96</div>
                <div className="min-w-80 bg-red-200">min-w-80</div>
                <div className="min-w-64 bg-red-300">min-w-64</div>
                <div className="min-w-48 bg-red-400">min-w-48</div>
                <div className="min-w-40 bg-red-500">min-w-40</div>
                <div className="min-w-32 bg-red-600">min-w-32</div>
                <div className="min-w-24 bg-red-700">min-w-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Max-Width</h1>
            <div className="flex flex-col bg-black">
                <div className="max-w-96 bg-red-100">max-w-96</div>
                <div className="max-w-80 bg-red-200">max-w-80</div>
                <div className="max-w-64 bg-red-300">max-w-64</div>
                <div className="max-w-48 bg-red-400">max-w-48</div>
                <div className="max-w-40 bg-red-500">max-w-40</div>
                <div className="max-w-32 bg-red-600">max-w-32</div>
                <div className="max-w-24 bg-red-700">max-w-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Height</h1>
            <div className="flex flex-row bg-black h-96">
                <div className="h-96 bg-red-100">h-96</div>
                <div className="h-80 bg-red-200">h-80</div>
                <div className="h-64 bg-red-300">h-64</div>
                <div className="h-48 bg-red-400">h-48</div>
                <div className="h-40 bg-red-500">h-40</div>
                <div className="h-32 bg-red-600">h-32</div>
                <div className="h-24 bg-red-700">h-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Min-Height</h1>
            <div className="flex flex-row bg-black">
                <div className="min-h-96 bg-red-100">min-h-96</div>
                <div className="min-h-80 bg-red-200">min-h-80</div>
                <div className="min-h-64 bg-red-300">min-h-64</div>
                <div className="min-h-48 bg-red-400">min-h-48</div>
                <div className="min-h-40 bg-red-500">min-h-40</div>
                <div className="min-h-32 bg-red-600">min-h-32</div>
                <div className="min-h-24 bg-red-700">min-h-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Max-Height</h1>
            <div className="flex flex-row bg-black h-96">
                <div className="max-h-96 bg-red-100">max-h-96</div>
                <div className="max-h-80 bg-red-200">max-h-80</div>
                <div className="max-h-64 bg-red-300">max-h-64</div>
                <div className="max-h-48 bg-red-400">max-h-48</div>
                <div className="max-h-40 bg-red-500">max-h-40</div>
                <div className="max-h-32 bg-red-600">max-h-32</div>
                <div className="max-h-24 bg-red-700">max-h-24</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Size</h1>
            <div className="flex flex-row bg-black h-96 space-x-3">
                <div className="flex items-center justify-center size-44 bg-red-100">size-44</div>
                <div className="flex items-center justify-center size-40 bg-red-200">size-40</div>
                <div className="flex items-center justify-center size-36 bg-red-300">size-36</div>
                <div className="flex items-center justify-center size-32 bg-red-400">size-32</div>
                <div className="flex items-center justify-center size-28 bg-red-500">size-28</div>
                <div className="flex items-center justify-center size-24 bg-red-600">size-24</div>
                <div className="flex items-center justify-center size-20 bg-red-700">size-20</div>
            </div>
        </div>
    );
}