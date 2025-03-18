import { useState } from "react";
import { Link } from "react-router-dom";
import GameFilters from "../components/GameFilters";
import { useFilteredGames } from "../hooks/useFilteredGames";
import { Spinner } from "../components/Spinner";

const Home = () => {
    const [filters, setFilters] = useState({});
    const { data: games, error, isLoading } = useFilteredGames(filters);

    return (
        <div className="bg-gray-900 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">📌 Video Game Library</h1>

            <GameFilters onApplyFilters={setFilters} />

            {isLoading && <Spinner />}
            {error && <p className="text-red-500 text-center">Error Loading Games.</p>}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {games?.map((game) => (
                        <Link
                            key={game.id}
                            to={`/game/${game.id}`}
                            className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
                        >
                            <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-white">{game.name}</h3>
                                <div className="mt-2 text-sm text-gray-300">
                                    <p>⭐ {game.rating}</p>
                                    <p>🎭 Metacritic: {game.metacritic}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;