import { useGames } from "../hooks/useGames";

const GameList = () => {
    const { data: games, error, isLoading } = useGames();

    if (isLoading) return <p>Loading games...</p>;
    if (error) return <p>Error loading games</p>;

    return (
        <div className="grid grid-cols-3 gap-4">
            {games?.map((game) => (
                <div key={game.id} className="border rounded p-4">
                    <img src={game.background_image} alt={game.name} className="w-full h-40 object-cover rounded" />
                    <h3 className="mt-2 font-bold">{game.name}</h3>
                    <p>⭐ {game.rating} | 📅 {game.released}</p>
                </div>
            ))}
        </div>
    );
};

export default GameList;
