import { useQuery } from "@tanstack/react-query";
import { getTopRatedGames } from "../services";
import { Game } from "../types";

export const useTopRatedGames = () => {
    return useQuery<Game[], Error>({
        queryKey: ["topRatedGames"],
        queryFn: getTopRatedGames,
    });
};
