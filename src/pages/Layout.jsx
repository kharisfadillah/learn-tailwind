import { useEffect } from "react";
import img317 from "../assets/317.jpg";

export default function Layout() {
    useEffect(() => {
        document.title = "Belajar Tailwind - Layout";
    }, []);

    return (
        <div className="m-auto h-screen bg-white p-4 w-full">
            <h1 className="text-3xl font-bold underline my-5 text-center">Layout</h1>
            <h1 className="text-xl font-bold underline">Aspect Ratio</h1>
            <div className="flex flex-col bg-black">
                <div className="aspect-auto w-48 bg-red-300">Aspect Auto (Tes Aspect Auto)</div>
                <div className="aspect-square w-48 bg-red-500">Aspect Square</div>
                <div className="aspect-video w-48 bg-red-700">Aspect Video</div>
                <div className="aspect-[3/2] w-48 bg-red-900">Aspect 3/2</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Container</h1>
            <div className="flex flex-col bg-black">
                <div className="container mx-auto bg-gray-200 p-6">
                    Container ini akan berubah ukuran sesuai layar.
                </div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Column</h1>
            <div className="flex flex-col bg-black">
                <div className="columns-2 gap-4">
                    <div className="bg-blue-500 p-4">Item 1</div>
                    <div className="bg-green-500 p-4">Item 2</div>
                    <div className="bg-red-500 p-4">Item 3</div>
                </div>

            </div>
            <h1 className="mt-4 text-xl font-bold underline">Break After</h1>
            <div className="columns-2 gap-4">
                <div className="bg-blue-500 p-4 break-after-column">Item 1</div>
                <div className="bg-green-500 p-4">Item 2</div>
                <div className="bg-red-500 p-4">Item 3</div>
                <div className="bg-yellow-500 p-4">Item 4</div>
                <div className="bg-yellow-600 p-4">Item 5</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Break Before</h1>
            <div className="columns-2 gap-4">
                <div className="bg-blue-500 p-4">Item 1</div>
                <div className="bg-green-500 p-4 break-before-column">Item 2</div>
                <div className="bg-red-500 p-4">Item 3</div>
                <div className="bg-yellow-500 p-4">Item 4</div>
            </div>
            <h1 className="mt-4 text-xl font-bold underline">Break Inside</h1>
            <div className="columns-2 gap-4">
                <div className="bg-blue-500 p-4 break-inside-avoid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, exercitationem numquam odio quasi provident ipsam ut dolore distinctio velit iste commodi, perspiciatis omnis. Impedit dicta corporis nemo voluptatum ex. Eveniet.</div>
                <div className="bg-green-500 p-4">Item 2</div>
                <div className="bg-red-500 p-4">Item 3</div>
                <div className="bg-yellow-500 p-4">Item 4</div>
            </div>

            <h1 className="mt-4 text-xl font-bold underline">Box Decoration Break</h1>
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                Hello<br />
                World
            </span>
            <br />
            <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                Hello<br />
                World
            </span>
            <br />
            <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                Hello<br />
                World
            </span>

            <h1 className="mt-4 text-xl font-bold underline">Box Sizing</h1>
            <div className="flex gap-4">
                <div className="box-border h-32 w-32 p-4 border-4 border-lime-400">
                    Box Border
                </div>
                <div className="box-content h-32 w-32 p-4 border-4 border-lime-400">
                    Box Content
                </div>
            </div>

            <h1 className="mt-4 text-xl font-bold underline">Display</h1>
            <div className="mt-2 space-x-2">
                <div className="inline bg-amber-300 p-2">Div Inline 1</div>
                <div className="inline bg-red-300 p-2">Div Inline 2</div>
                <div className="inline bg-emerald-300 p-2">Div Inline 3</div>
            </div>
            <div className="mt-4">
                <span className="block bg-amber-300 p-2">Span Block 1</span>
                <span className="block bg-red-300 p-2">Span Block 2</span>
                <span className="block bg-emerald-300 p-2">Span Block 3</span>
            </div>
            <div className="mt-4">
                <span className="inline-block bg-amber-300 px-2 py-4">Span Inline Block 1</span>
                <span className="inline-block bg-red-300 px-2 py-4">Span Inline Block 2</span>
                <span className="inline-block bg-emerald-300 px-2 py-4">Span Inline Block 3</span>
            </div>

            <div className="bg-indigo-300 p-4 flow-root">
                <img src={img317} className="float-left mr-4" />
                <p>Ini adalah teks yang mengapit gambar. (Dengan Flow Root)</p>
            </div>
            <div className="bg-violet-300 p-4">
                <img src={img317} className="float-left mr-4" />
                <p>Ini adalah teks yang mengapit gambar. (Tanpa Flow Root)</p>
            </div>

            <div className="flex items-center">
                <img src={img317} />
                <div>
                    <strong>Andrew Alfred</strong>
                    <span>Technical advisor</span>
                </div>
            </div>

            <button className="inline-flex items-center bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
                Dropdown
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5-5h10l-5 5z" />
                </svg>
            </button>

            {/* Grid */}
            <div className="mt-4 grid grid-cols-3 gap-4 bg-gray-200 p-4">
                <div className="bg-blue-500 p-4">Item 1</div>
                <div className="bg-green-500 p-4">Item 2</div>
                <div className="bg-red-500 p-4">Item 3</div>
            </div>

            {/* Inline Grid */}
            <span className="inline-grid grid-cols-3 gap-4 p-4 bg-orange-300">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
            </span>
            <span className="inline-grid grid-cols-3 gap-4 p-4 bg-teal-300">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>06</span>
            </span>

            {/* Content */}
            <div className="bg-gray-200 p-4">
                <div className="bg-blue-500 p-4">Item 1 Tanpa Content</div>
                <div className="bg-green-500 p-4">Item 2 Tanpa Content</div>
            </div>

            <div className="contents bg-gray-200 p-4">
                <div className="bg-blue-500 p-4">Item 1 Dengan Content</div>
                <div className="bg-green-500 p-4">Item 2 Dengan Content</div>
            </div>

            {/* Table */}
            <div className="table w-full border-collapse border border-gray-500 my-4">
                <div className="table-row bg-gray-200">
                    <div className="table-cell border border-gray-500 p-2">Item 1</div>
                    <div className="table-cell border border-gray-500 p-2">Item 2</div>
                    <div className="table-cell border border-gray-500 p-2">Item 3</div>
                </div>
                <div className="table-row">
                    <div className="table-cell border border-gray-500 p-2">Item 4</div>
                    <div className="table-cell border border-gray-500 p-2">Item 5</div>
                    <div className="table-cell border border-gray-500 p-2">Item 6</div>
                </div>
            </div>

            {/* Float */}
            <div className="w-full p-4 bg-fuchsia-300 flow-root">
                <img src={img317} alt="Gambar" className="float-left mr-4 rounded" />
                <p>Ini adalah teks yang akan mengalir di sebelah gambar. Float kiri membuat elemen lain berada di sebelah kanan elemen ini.</p>
            </div>
            <div className="w-full p-4 bg-rose-300 flow-root">
                <img src={img317} alt="Gambar" className="float-right mr-4 rounded" />
                <p>Ini adalah teks yang akan mengalir di sebelah gambar. Float kiri membuat elemen lain berada di sebelah kanan elemen ini.</p>
            </div>

            {/* Clear */}
            <div className="w-full p-4 bg-gray-100 flow-root">
                <img src={img317} alt="Gambar" className="float-left mr-4 rounded" />
                <p>Ini adalah teks yang akan mengalir di sebelah gambar karena gambar menggunakan float kiri.</p>
                <p>Paragraf ini juga ikut naik ke samping gambar!</p>
            </div>
            <div className="w-full p-4 bg-gray-100">
                <img src={img317} alt="Gambar" className="float-left mr-4 rounded" />
                <p>Ini adalah teks yang akan mengalir di sebelah gambar karena gambar menggunakan float kiri.</p>
                <div className="clear-both"></div>
                <p>Paragraf ini turun ke bawah karena menggunakan `clear-both`.</p>
            </div>
            <div className="w-full p-4 bg-gray-100">
                <img src={img317} alt="Gambar" className="float-left mr-4 rounded" />
                <img src={img317} alt="Gambar" className="float-right ml-4 rounded" />
                <p>Ini teks yang tetap di tengah antara gambar kiri dan kanan.</p>
                <p className="clear-right">Teks ini turun ke bawah karena `clear-both`.</p>
            </div>

            {/* Isolation */}
            <div className="relative bg-gray-200 p-8 h-48">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 text-white mix-blend-multiply flex items-center justify-center">
                    Tanpa Isolate
                </div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-green-500 text-white mix-blend-multiply flex items-center justify-center">
                    Tanpa Isolatexxx
                </div>
            </div>

            <div className="relative bg-gray-200 p-8 h-48">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 text-white mix-blend-multiply flex items-center justify-center">
                    Tanpa Isolate
                </div>
                <div className="absolute top-4 left-4 w-32 h-32 bg-green-500 text-white isolate mix-blend-multiply flex items-center justify-center">
                    Dengan Isolate
                </div>
            </div>









        </div>
    );
}