import { useEffect, useState } from "react";

export default function Album() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/albums"
                );
                if (!response.ok) throw new Error("Gagal mengambil data");
                const result = await response.json();
                setAlbums(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full gap-4 p-4 bg-orange-300">
            {isLoading ? (<p>Loading .....</p>) :
                (albums.map((album) => (
                    <a href={`/photos?albumId=${album.id}`} className="p-2 rounded border border-green-600 bg-green-100 hover:bg-green-200" key={album.id}>

                        {album.title}

                    </a>

                )))
            }
        </div>
    );
}