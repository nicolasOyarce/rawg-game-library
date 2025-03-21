import { useState, useEffect } from "react";
import { getFilteredGames } from "../services";
import { GameFilters, Game } from "../types";

export const useFilteredGames = (filters: GameFilters) => {
    const [data, setData] = useState<Game[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const games = await getFilteredGames(filters);
                setData(Array.isArray(games) ? games : [games]);
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
