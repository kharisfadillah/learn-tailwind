import { useEffect } from "react";

export default function Flex() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Flex";
    }, []);

    return (
        <div className="m-auto h-screen bg-white p-4 w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Flex</h1>
            <h1 className="text-xl font-bold underline">Flex Basis</h1>
            <div className="flex flex-row rounded-lg overflow-hidden">
                <div className="basis-1/4 bg-amber-300 p-4">01</div>
                <div className="basis-1/4 bg-sky-300 p-4">02</div>
                <div className="basis-1/2 bg-fuchsia-300 p-4">03</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Flex Direction</h1>
            <div className="mt-1 flex flex-row rounded-lg overflow-hidden">
                <div className="basis-1/4 bg-amber-300 p-4">01</div>
                <div className="basis-1/4 bg-sky-300 p-4">02</div>
                <div className="basis-1/2 bg-fuchsia-300 p-4">03</div>
            </div>
            <div className="mt-1 flex flex-row-reverse rounded-lg overflow-hidden">
                <div className="basis-1/4 bg-amber-300 p-4">01</div>
                <div className="basis-1/4 bg-sky-300 p-4">02</div>
                <div className="basis-1/2 bg-fuchsia-300 p-4">03</div>
            </div>
            <div className="mt-1 flex flex-col rounded-lg overflow-hidden">
                <div className="bg-amber-300 p-4 text-center">01</div>
                <div className="bg-sky-300 p-4 text-center">02</div>
                <div className="bg-fuchsia-300 p-4 text-center">03</div>
            </div>
            <div className="mt-1 flex flex-col-reverse rounded-lg overflow-hidden">
                <div className="bg-amber-300 p-4 text-center">01</div>
                <div className="bg-sky-300 p-4 text-center">02</div>
                <div className="bg-fuchsia-300 p-4 text-center">03</div>
            </div>

            <div className="mt-1 flex flex-col-reverse rounded-lg overflow-hidden hover:flex-col">
                <div className="bg-amber-300 p-4 text-center">01</div>
                <div className="bg-sky-300 p-4 text-center">02</div>
                <div className="bg-fuchsia-300 p-4 text-center">03</div>
            </div>

            {/* Flex Wrap */}
            <h1 className="mt-4 text-xl font-bold underline">Flex Wrap</h1>
            <div className="mt-1 flex flex-nowrap rounded-lg overflow-hidden">
                <div className="w-1/2 bg-amber-300 p-4">01</div>
                <div className="w-1/3 bg-sky-300 p-4">02</div>
                <div className="w-1/3 bg-fuchsia-300 p-4">03</div>
            </div>
            <div className="mt-1 flex flex-wrap rounded-lg overflow-hidden">
                <div className="w-1/2 bg-amber-300 p-4">01</div>
                <div className="w-1/3 bg-sky-300 p-4">02</div>
                <div className="w-1/3 bg-fuchsia-300 p-4">03</div>
            </div>
            <div className="mt-1 flex flex-wrap-reverse rounded-lg overflow-hidden">
                <div className="w-1/2 bg-amber-300 p-4">01</div>
                <div className="w-1/3 bg-sky-300 p-4">02</div>
                <div className="w-1/3 bg-fuchsia-300 p-4">03</div>
            </div>

            {/* Flex */}
            <h1 className="mt-4 text-xl font-bold underline">Flex</h1>
            <h2 className="text-lg font-semibold my-2">flex-1 (Membesar dan mengecil)</h2>
            <div className="flex border p-2 space-x-2">
                <div className="flex-1 bg-blue-400 text-white p-4">A</div>
                <div className="flex-1 bg-green-400 text-white p-4">B</div>
                <div className="flex-1 bg-red-400 text-white p-4">C</div>
            </div>

            <h2 className="text-lg font-semibold my-2">flex-auto (Mengikuti konten lalu membesar)</h2>
            <div className="flex border p-2 space-x-2">
                <div className="flex-auto bg-blue-400 text-white p-4">A</div>
                <div className="flex-auto bg-green-400 text-white p-4">B lebih panjang</div>
                <div className="flex-auto bg-red-400 text-white p-4">C lebih panjang lagi</div>
            </div>
        </div>
    );
}