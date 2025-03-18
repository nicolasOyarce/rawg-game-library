import { useQuery } from "@tanstack/react-query";
import { getTopRatedGames, Game } from "../services/gameService";

export const useTopRatedGames = () => {
    return useQuery<Game[], Error>({
        queryKey: ["topRatedGames"],
        queryFn: getTopRatedGames,
    });
};
