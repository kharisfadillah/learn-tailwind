import PropTypes from "prop-types";
import { useEffect } from "react";

const CustomButton = ({ label, href }) => {
    return (
        <a href={href} className="font-custom basis-1/5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            {label}
        </a>
    );
}

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default function Home() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Home";
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-4/5 h-auto m-auto">
                <h1 className="text-4xl text-center mb-14 font-custom">Belajar Tailwind</h1>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <CustomButton label="Spacing" href="/spacing" />
                    <CustomButton label="Sizing" href="/sizing" />
                    <CustomButton label="Layout" href="/layout" />
                    <CustomButton label="Flex" href="/flex" />
                    <CustomButton label="Grid" href="/grid" />
                    <CustomButton label="Landing Page" href="/landing-page" />
                    <CustomButton label="Kalkulator" href="/kalkulator" />
                    <CustomButton label="Calculator" href="/calculator" />
                    <CustomButton label="Healthcare" href="/healthcare" />
                    <CustomButton label="Modal" href="/modal" />
                    <CustomButton label="Modal 2" href="/modal-2" />
                    <CustomButton label="Pos" href="/pos" />
                    <CustomButton label="Pos 2" href="/pos-2" />
                    <CustomButton label="Search Component" href="/search-component" />
                    <CustomButton label="Album" href="/album" />
                    <CustomButton label="Stack" href="/stack" />
                    <CustomButton label="Backdrop" href="/backdrop" />
                    <CustomButton label="Neat Landing Page" href="/neat" />
                    <CustomButton label="Custom Font" href="/custom-font" />
                </div>
            </div>

        </div>
    );
}