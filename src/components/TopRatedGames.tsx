import { useTopRatedGames } from "../hooks/useTopRatedGames";

const TopRatedGames = () => {
    const { data: games, error, isLoading } = useTopRatedGames();

    if (isLoading) return <p>Loading Games...</p>;
    if (error) return <p>Error Loading Games</p>;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">🎮 Best Games according to Metacritic</h2>
            <div className="grid grid-cols-3 gap-4">
                {games?.map((game) => (
                    <div key={game.id} className="border rounded p-4">
                        <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover rounded" />
                        <h3 className="mt-2 font-bold">{game.name}</h3>
                        <p>⭐ {game.rating} | 🎭 Metacritic: {game.metacritic}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedGames;
