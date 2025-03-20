import { useQuery } from "@tanstack/react-query";
import { getGames } from "../services";
import { Game } from "../types";

export const useGames = () => {
    return useQuery<Game[], Error>({
        queryKey: ["games"],
        queryFn: getGames,
    });
};
