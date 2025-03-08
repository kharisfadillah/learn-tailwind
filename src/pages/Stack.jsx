import { useEffect } from "react";

export default function Stack() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Stack";
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-blue-400">
            <div className="fixed left-0 right-0 top-0 h-32 bg-indigo-400"></div>
            <div className="relative w-64 h-64 bg-gray-200 group">
                <div className="absolute top-0 left-0 w-[160px] h-[160px] bg-red-500 group-hover:bg-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-[160px] h-[160px] bg-blue-500 group-hover:bg-red-500"></div>
            </div>
        </div>
    );
}