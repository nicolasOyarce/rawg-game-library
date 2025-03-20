import { useTopRatedGames } from "../hooks";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const TopRatedGames = () => {
    const { data: games, error, isLoading } = useTopRatedGames();

    if (isLoading) return <Spinner />;
    if (error) return <p>Error Loading Games</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-white pt-4">🎮 Best Games according to Metacritic</h2>
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
    );
};

export default TopRatedGames;
