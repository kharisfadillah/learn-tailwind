import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Home";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <a href="/spacing" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Spacing
            </a>
            <a href="/sizing" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Sizing
            </a>
            <a href="/layout" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Layout
            </a>
            <a href="/flex" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Flex
            </a>
            <a href="/grid" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Grid
            </a>
            <a href="/landing-page" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Landing Page
            </a>
            <a href="/kalkulator" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Kalkulator
            </a>
            <a href="/calculator" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Calculator
            </a>
            <a href="/healthcare" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                HealthCare
            </a>
        </div>
    );
}