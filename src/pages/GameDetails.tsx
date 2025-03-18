import { useParams } from "react-router-dom";
import { useGameDetails } from "../hooks/useGameDetails";

const GameDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: game, isLoading, error } = useGameDetails(id || "");

    if (isLoading) return <p className="text-white text-center">Loading Details...</p>;
    if (error) return <p className="text-red-500 text-center">Error Loading Details</p>;

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-6">{game?.name}</h1>
                <img src={game?.background_image} alt={game?.name} className="w-full h-96 object-cover rounded-lg mb-6" />
                <p className="text-lg text-gray-300">{game?.description_raw}</p>

                <div className="mt-6 space-y-4 text-gray-300">
                    <p><strong className="text-white">Genre:</strong> {game?.genres.map(g => g.name).join(", ")}</p>
                    <p><strong className="text-white">Metacritic Score:</strong> {game?.metacritic}</p>
                    <p><strong className="text-white">Platforms:</strong> {game?.platforms.map(p => p.platform.name).join(", ")}</p>
                    <p><strong className="text-white">Year of launch:</strong> {game?.released}</p>
                </div>

                {game?.clip?.clip && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-white">🎥 Trailer</h2>
                        <video controls className="w-full mt-4 rounded-lg">
                            <source src={game.clip.clip} type="video/mp4" />
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDetails;