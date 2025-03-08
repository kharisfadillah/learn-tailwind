import PropTypes from "prop-types";
import { useEffect } from "react";
// import img_bg_1 from "../assets/img_bg_1.jpg";
import img_bg_4 from "../assets/img_bg_4.jpg";

// const NavLink = ({ href, label }) => {
//     return (
//         <a href={href} className="text-xs font-semibold tracking-wide relative text-black/30 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-5px] hover:after:w-full hover:after:h-0.5 hover:after:bg-green-500">
//             {label}
//         </a>
//     );
// };

// const NavLink = ({ href, label, isActive }) => {
//     return (
//         <a
//             href={href}
//             className={`relative text-xs transition duration-300 font-semibold tracking-wide text-black/30 hover:text-black 
//             after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 
//             after:bg-green-500 after:transition-all after:duration-300 after:scale-x-0 after:translate-y-0 
//             ${isActive ? "after:w-full after:left-0 after:scale-x-100 after:translate-y-1.5" : "hover:after:w-full hover:after:left-0 hover:after:scale-x-100 hover:after:translate-y-1.5"}`}
//         >
//             {label}
//         </a>
//     );
// };

const NavLink = ({ href, label, isActive }) => {
    const baseClasses = "relative text-xs transition duration-300 font-semibold tracking-wide";
    const textClasses = isActive ? "text-black" : "text-black/30 hover:text-black";
    const afterClasses = isActive
        ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 after:scale-x-100 after:translate-y-1.5"
        : "after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 after:scale-x-0 after:translate-y-0 hover:after:w-full hover:after:left-0 hover:after:scale-x-100 hover:after:translate-y-1.5";

    return (
        <a href={href} className={`${baseClasses} ${textClasses} ${afterClasses}`}>
            {label}
        </a>
    );
};

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

NavLink.defaultProps = {
    isActive: false,
};

export default function NeatLandingPage() {
    useEffect(() => {
        document.body.classList.add("bg-[#E8E8E8]");


        return () => {
            document.body.classList.remove("bg-[#E8E8E8]");
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen w-full">
            <nav className="flex justify-between px-[34px] py-[30px] bg-white w-[1060px] mx-auto mt-16">
                <div className="text-2xl font-bold">NEAT</div>
                <div className="space-x-6">
                    <NavLink href="" label="HOME" isActive />
                    <NavLink href="" label="WORK" />
                    <NavLink href="" label="BLOG" />
                    <NavLink href="" label="ABOUT" />
                    <NavLink href="" label="CONTACT" />
                </div>
            </nav>
            <div className="relative w-[1060px] h-[500px] mx-auto mt-4">
                <img src={img_bg_4} alt="Tes" className="absolute w-full h-full object-cover" />
                <div className="absolute p-6 left-12 top-1/2 w-1/2 space-y-2">
                    <h1 className="text-3xl">Not Every Project Needs To Be Perfect</h1>
                    <h2 className="text-lg">Free html5 templates Available at Themewagon</h2>
                </div>
            </div>
        </div>
    );
}