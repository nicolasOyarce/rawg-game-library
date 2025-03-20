import { useQuery } from "@tanstack/react-query";
import { getGameDetails } from "../services";

export const useGameDetails = (id: string) => {
    return useQuery({
        queryKey: ["gameDetails", id],
        queryFn: () => getGameDetails(id),
        enabled: !!id,
    });
};
