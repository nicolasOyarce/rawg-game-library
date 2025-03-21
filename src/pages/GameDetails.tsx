import { useParams } from "react-router-dom";
import { useGameDetails } from "../hooks";
import { Navigation, Spinner } from "../components";
import { FaGamepad, FaStar, FaDesktop, FaCalendarAlt } from "react-icons/fa";

const GameDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: game, isLoading, error } = useGameDetails(id || "");

    if (isLoading) return <Spinner />;
    if (error) return <p className="text-red-500 text-center">Error Loading Details</p>;

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
                <h1 className="text-4xl font-bold text-white mb-8 text-center">{game?.name}</h1>

                <div className="flex flex-col md:flex-row gap-8 mb-8 items-center">
                    {/* Imagen */}
                    <div className="flex justify-center md:w-1/2">
                        <img
                            src={game?.background_image}
                            alt={game?.name}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaGamepad className="text-2xl text-white" />
                            <p className="text-lg text-gray-300">
                                <strong className="text-white">Genre:</strong> {game?.genres.map(g => g.name).join(", ")}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaStar className="text-2xl text-white" />
                            <p className="text-lg text-gray-300">
                                <strong className="text-white">Metacritic Score:</strong> {game?.metacritic}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaDesktop className="text-2xl text-white" />
                            <p className="text-lg text-gray-300">
                                <strong className="text-white">Platforms:</strong> {game?.platforms.map(p => p.platform.name).join(", ")}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaCalendarAlt className="text-2xl text-white" />
                            <p className="text-lg text-gray-300">
                                <strong className="text-white">Year of launch:</strong> {game?.released}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-lg text-gray-300 leading-loose mb-8">{game?.description_raw}</p>

                {game?.clip?.clip && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-white mb-4 text-center">🎥 Trailer</h2>
                        <div className="flex justify-center">
                            <video controls className="w-full max-w-2xl rounded-lg shadow-md">
                                <source src={game.clip.clip} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameDetails;