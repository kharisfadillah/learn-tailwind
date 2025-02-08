import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = "Belajar Tailwind - NotFound";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-2">404</h1>
            <p className="text-xl text-gray-700 mb-4">Halaman yang Anda cari tidak ditemukan.</p>
            <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Kembali ke Home
            </a>
        </div>
    );
}