import { useState } from "react";
import { Link } from "react-router-dom";
import GameFilters from "../components/GameFilters";
import { useFilteredGames } from "../hooks/useFilteredGames";

const Home = () => {
    const [filters, setFilters] = useState({});
    const { data: games, error, isLoading } = useFilteredGames(filters);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">📌 Video Game Library</h1>

            <GameFilters onApplyFilters={setFilters} />

            {isLoading && <p>Loading Games...</p>}
            {error && <p>Error Loading Games.</p>}
            
            <div className="grid grid-cols-3 gap-4 mt-4">
                {games?.map((game) => (
                    <Link key={game.id} to={`/game/${game.id}`} className="border rounded p-4 block hover:bg-gray-100 transition">
                        <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover rounded" />
                        <h3 className="mt-2 font-bold">{game.name}</h3>
                        <p>⭐ {game.rating} | 🎭 Metacritic: {game.metacritic}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
