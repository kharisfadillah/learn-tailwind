export default function Backdrop() {
    return (
        // <div className="flex backdrop-blur-lg w-full min-h-screen justify-center items-center">
        //     <div className="w-64 h-64 backdrop-blur-2xl rounded-xl bg-green-300 shadow"></div>
        // </div>
        <div className="relative h-screen flex items-center justify-center bg-green-700">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
            <div className="relative z-10 p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white">Halo, Dunia!</h2>
                <p className="text-white">Ini adalah efek kaca buram (glassmorphism).</p>
            </div>
        </div>

    );
}