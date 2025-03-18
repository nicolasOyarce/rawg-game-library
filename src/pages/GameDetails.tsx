import { useParams } from "react-router-dom";
import { useGameDetails } from "../hooks/useGameDetails";

const GameDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: game, isLoading, error } = useGameDetails(id || "");

    if (isLoading) return <p>Loading Details...</p>;
    if (error) return <p>Error Loading Details</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{game?.name}</h1>
            <img src={game?.background_image} alt={game?.name} className="w-full h-96 object-cover rounded mb-4" />
            <p className="text-lg">{game?.description_raw}</p>

            <div className="mt-4">
                <p><strong>Genre:</strong> {game?.genres.map(g => g.name).join(", ")}</p>
                <p><strong>Metacritic Score:</strong> {game?.metacritic}</p>
                <p><strong>Platforms:</strong> {game?.platforms.map(p => p.platform.name).join(", ")}</p>
                <p><strong>Year of launch:</strong> {game?.released}</p>
            </div>

            {game?.clip?.clip && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold">🎥 Trailer</h2>
                    <video controls className="w-full mt-2 rounded">
                        <source src={game.clip.clip} type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
};

export default GameDetails;
