import { useQuery } from "@tanstack/react-query";
import { getGames, Game } from "../services/gameService";

export const useGames = () => {
    return useQuery<Game[], Error>({
        queryKey: ["games"],
        queryFn: getGames,
    });
};
