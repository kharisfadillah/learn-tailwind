import { useState } from "react";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>

            <h1 className="text-3xl">Tes Saja</h1>
            <div className="flex items-center justify-center min-h-screen">
                {/* Trigger Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Open Modal
                </button>

                {/* Modal Container */}
                <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                    {/* Modal Content */}
                    <div className={`bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-500 
                    ${isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-5"}`}>
                        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
                        <p className="text-gray-600 mb-4">This is a simple modal using Tailwind CSS.</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
