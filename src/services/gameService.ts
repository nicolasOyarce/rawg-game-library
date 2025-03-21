import apiClient from "./apiClient";
import { Game, GameFilters, PaginatedResponse } from "../types";

export const getGames = async (): Promise<Game[]> => {
    try {
        const response = await apiClient.get("games");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching games:", error);
        throw error;
    }
};

export const getTopRatedGames = async (page = 1, pageSize = 20): Promise<PaginatedResponse<Game>> => {
    try {
        const response = await apiClient.get("games", {
            params: {
                key: import.meta.env.VITE_RAWG_API_KEY,
                ordering: "-metacritic",
                page,
                page_size: pageSize,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching top rated games:", error);
        throw error;
    }
};

export const getFilteredGames = async (filters: GameFilters): Promise<Game> => {
    try {
        const response = await apiClient.get("games", {
            params: {
                ordering: "-added",
                ...(filters.year && { dates: `${filters.year}-01-01,${filters.year}-12-31` }),
                ...(filters.genre && { genres: filters.genre }),
                ...(filters.platform && { platforms: filters.platform }),
                ...(filters.tag && { tags: filters.tag }),
                ...(filters.developer && { developers: filters.developer }),
                ...(filters.query && { search: filters.query }),
            },
        });

        return response.data.results;
    } catch (error) {
        console.error("Error fetching filtered games:", error);
        throw error;
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
