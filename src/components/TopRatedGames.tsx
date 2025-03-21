import { useState } from "react";
import { useTopRatedGames } from "../hooks";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { DEFAULT_IMAGE } from "../config";

const PAGE_SIZE = 32;

const TopRatedGames = () => {
    const [page, setPage] = useState(1);
    const { data: games, error, isLoading } = useTopRatedGames(page, PAGE_SIZE);
    const totalPages = games ? Math.ceil(games.count / PAGE_SIZE) : 0;

    if (isLoading) return <Spinner />;
    if (error) return <p>Error Loading Games</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4 text-white pt-4">🎮 Best Games according to Metacritic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {games?.results.map((game) => (
                    <Link
                        key={game.id}
                        to={`/game/${game.id}`}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
                    >
                        <img
                            src={game.background_image || DEFAULT_IMAGE}
                            alt={game.name}
                            className="w-full h-40 object-cover"
                            onError={(e) => e.currentTarget.src = DEFAULT_IMAGE}
                        />
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
            <div className="flex flex-col items-center mt-8">
                <div className="flex items-center space-x-2 mb-2">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
                        aria-label="Página anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Previous
                    </button>

                    <div className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center">
                        <span>Page</span>
                        <span className="font-bold mx-2">{page}</span>
                        {totalPages && <span>de {totalPages}</span>}
                    </div>

                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={!games?.next}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center"
                        aria-label="Página siguiente"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopRatedGames;
