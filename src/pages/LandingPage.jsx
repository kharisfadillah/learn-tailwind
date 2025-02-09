export default function LandingPage() {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-500">MyWebsite</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-500">Services</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* <nav className="bg-white shadow-md p-4 mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-500">MyWebsite</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-500">Services</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
                </ul>
            </nav> */}


            {/* Hero Section */}
            <header className="text-center py-16 bg-blue-500 text-white">
                <h1 className="text-4xl font-bold">Welcome to MyWebsite</h1>
                <p className="mt-2 text-lg">Build modern websites with Tailwind CSS</p>
                <button className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-200">
                    Get Started
                </button>
            </header>

            {/* Card Section */}
            <section className="container mx-auto my-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-2xl">
                            🎨
                        </div>
                        <h3 className="mt-4 text-xl font-bold">Web Design</h3>
                        <p className="mt-2 text-gray-600">We create stunning website designs.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-2xl">
                            🏗️
                        </div>
                        <h3 className="mt-4 text-xl font-bold">Web Development</h3>
                        <p className="mt-2 text-gray-600">We build fast and modern websites.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="bg-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-2xl">
                            🚀
                        </div>
                        <h3 className="mt-4 text-xl font-bold">SEO Optimization</h3>
                        <p className="mt-2 text-gray-600">We help you rank higher on Google.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
