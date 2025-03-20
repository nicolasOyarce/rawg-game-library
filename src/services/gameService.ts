import apiClient from "./apiClient";
import { Game, GameFilters } from "../types";

export const getGames = async (): Promise<Game[]> => {
    try {
        const response = await apiClient.get("games");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching games:", error);
        return [];
    }
};

export const getTopRatedGames = async (): Promise<Game[]> => {
    try {
        const response = await apiClient.get("games", {
            params: {
                key: import.meta.env.VITE_RAWG_API_KEY,
                ordering: "-metacritic",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching top-rated games:", error);
        return [];
    }
};

export const getFilteredGames = async (filters: GameFilters): Promise<Game[]> => {
    try {
        console.log("Aplicando filtros:", filters);

        const response = await apiClient.get("games", {
            params: {
                ordering: "-metacritic",
                ...(filters.year && { dates: `${filters.year}-01-01,${filters.year}-12-31` }),
                ...(filters.genre && { genres: filters.genre }),
                ...(filters.platform && { platforms: filters.platform }),
                ...(filters.tag && { tags: filters.tag }),
                ...(filters.developer && { developers: filters.developer }),
                ...(filters.query && { search: filters.query }),
            },
        });

        console.log("Juegos obtenidos:", response.data.results);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching filtered games:", error);
        return [];
    }
};

export const getGameDetails = async (id: string): Promise<Game> => {
    try {
        const response = await apiClient.get(`games/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching game details:", error);
        throw error;
    }
};
