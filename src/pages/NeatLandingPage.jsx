import { useEffect } from "react";

export default function NeatLandingPage() {
    useEffect(() => {
        document.body.classList.add("bg-[#E8E8E8]");


        return () => {
            document.body.classList.remove("bg-[#E8E8E8]");
        };
    }, []);

    return (
        <div className="flex min-h-screen w-full">
            <nav className="flex justify-between px-[34px] py-[30px] bg-white w-[1000px] m-auto">
                <div className="text-2xl font-bold">NEAT</div>
                <div className="space-x-6">
                    <a href="" className="text-xs font-semibold tracking-wide relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-0.5 after:bg-green-500">HOME</a>
                    <a href="" className="text-xs font-semibold tracking-wide text-black/30">WORK</a>
                    <a href="" className="text-xs font-semibold tracking-wide text-black/30">BLOG</a>
                    <a href="" className="text-xs font-semibold tracking-wide text-black/30">ABOUT</a>
                    <a href="" className="text-xs font-semibold tracking-wide text-black/30">CONTACT</a>
                </div>
            </nav>
        </div>
    );
}