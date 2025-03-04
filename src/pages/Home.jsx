import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Home";
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-center h-screen text-center gap-6 p-80">
            <a href="/spacing" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Spacing
            </a>
            <a href="/sizing" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Sizing
            </a>
            <a href="/layout" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Layout
            </a>
            <a href="/flex" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Flex
            </a>
            <a href="/grid" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Grid
            </a>
            <a href="/landing-page" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Landing Page
            </a>
            <a href="/kalkulator" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Kalkulator
            </a>
            <a href="/calculator" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Calculator
            </a>
            <a href="/healthcare" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                HealthCare
            </a>
            <a href="/modal" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Modal
            </a>
            <a href="/modal-2" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Modal2
            </a>
            <a href="/pos" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Pos
            </a>
            <a href="/pos-2" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Pos2
            </a>
            <a href="/search-component" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Search Component
            </a>
            <a href="/album" className="w-1/5 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Album
            </a>
        </div>
    );
}