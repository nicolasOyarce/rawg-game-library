import { useState, useEffect } from "react";
import { getFilteredGames, GameFilters } from "../services/gameService";

export const useFilteredGames = (filters: GameFilters) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            setError(null);

            console.log("Fetching games with filters:", filters);
            try {
                const games = await getFilteredGames(filters);
                setData(games);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGames();
    }, [filters]);

    return { data, isLoading, error };
};
