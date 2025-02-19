export default function HealthCare() {
    return (
        <div className="container m-auto min-h-screen">

            <nav className="flex justify-between items-center p-6">
                <div className="text-xl font-bold flex items-center">
                    <span className="mr-2">&#128138;</span> Holadok
                </div>
                <div className="hidden md:flex space-x-12 text-gray-600">
                    <a href="#" className="hover:text-black">Home</a>
                    <a href="#" className="hover:text-black">Features</a>
                    <a href="#" className="hover:text-black">Blog</a>
                    <a href="#" className="hover:text-black">About Us</a>
                </div>
                <div className="space-x-6">
                    <button className="text-gray-600 hover:text-black">Login</button>
                    <button className="border-primary border px-4 py-2 hover:bg-primary hover:text-white">Book Now</button>
                </div>
            </nav>

            <section className="flex flex-col-reverse md:flex-row items-center px-6 py-12">
                <div className="md:w-1/3 space-y-6">
                    <h1 className="text-5xl font-bold leading-tight">Get the healthcare you need, when you need it.</h1>
                    <p className="text-gray-600 leading-normal">Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.</p>
                    <button className="bg-primary text-white px-6 py-3 hover:bg-primary-400">Book an Appointment</button>
                </div>
                <div className="md:w-1/3 flex justify-center relative">
                    <div className="bg-blue-100 p-6 rounded-lg">
                        <img src="doctor-image.png" alt="Doctor" className="w-80 rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute bg-white p-4 shadow-lg rounded-lg top-1/3 right-4">
                        <p className="text-sm font-semibold">Jane Doe</p>
                        <p className="text-xs text-gray-600">The doctor appointment app has been great for me. Scheduling appointments and getting medication reminders is much easier, and I love the option for virtual consultations.</p>
                    </div>
                </div>
            </section>

            <section className="bg-primary text-white mx-6 my-36 p-12 flex flex-col gap-x-8 md:flex-row justify-around">
                <div className="flex gap-6">
                    <span className="text-3xl">📅</span>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-bold">Online appointment scheduling</h3>
                        <p className="text-sm leading-relaxed">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <span className="text-3xl">🔔</span>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-bold">Medication reminders</h3>
                        <p className="text-sm leading-relaxed">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <span className="text-3xl">💻</span>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-bold">Virtual consultations</h3>
                        <p className="text-sm leading-relaxed">Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}