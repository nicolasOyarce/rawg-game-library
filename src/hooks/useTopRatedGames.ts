import { useQuery } from "@tanstack/react-query";
import { getTopRatedGames } from "../services/gameService";
import { Game, PaginatedResponse } from "../types/gameTypes";

export const useTopRatedGames = (page: number, pageSize: number) => {
    return useQuery<PaginatedResponse<Game>, Error>({
        queryKey: ["topRatedGames", page],
        queryFn: () => getTopRatedGames(page, pageSize),

    });
};
