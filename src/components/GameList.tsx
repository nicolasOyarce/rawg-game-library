import { useFilteredGames } from "../hooks";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { GameListProps } from "../types";

const GameList: React.FC<GameListProps> = ({ filters }) => {
    const { data: games, isLoading, error } = useFilteredGames(filters);

    if (isLoading) return <Spinner />;
    if (error) return <p>Error loading game.</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-white pt-4">🎮 Games Filtered</h2>
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

export default GameList;
