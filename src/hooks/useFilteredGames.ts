import { useQuery } from "@tanstack/react-query";
import { getFilteredGames, Game, GameFilters } from "../services/gameService";

export const useFilteredGames = (filters: GameFilters) => {
    return useQuery<Game[], Error>({
        queryKey: ["filteredGames", filters],
        queryFn: () => getFilteredGames(filters),
    });
};

