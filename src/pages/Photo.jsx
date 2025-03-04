import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Photo() {

    const [searchParams] = useSearchParams();
    const albumId = searchParams.get("albumId");

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
                );
                if (!response.ok) throw new Error("Gagal mengambil data");
                const result = await response.json();
                setPhotos(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [albumId]);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full gap-4 p-4 bg-orange-300">
            {isLoading ? (<p>Loading .....</p>) :
                (photos.map((photo) => (
                    <div className="p-2 rounded border border-green-600 bg-green-100 hover:bg-green-200" key={photo.id}>
                        <img src="https://picsum.photos/200" alt={photo.title} className="w-32 h-32 object-cover rounded" />
                        <p>
                            {photo.title}
                        </p>

                    </div>

                )))
            }
        </div>
    );

}