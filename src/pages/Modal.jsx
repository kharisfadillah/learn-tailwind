import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Open Modal
            </button>

            {/* Modal Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                        {/* Modal Content */}
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg w-96"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                            exit={{ y: -50, opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
                            <p className="text-gray-600 mb-4">This is a simple modal using Tailwind CSS and React.</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
