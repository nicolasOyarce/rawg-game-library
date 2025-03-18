import apiClient from "./apiClient";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
    rating: number;
    metacritic: number;
    genres: { id: number; name: string }[];
    platforms: { platform: { id: number; name: string } }[];
    description_raw: string;
    clip?: { clip: string };
}

export interface GameFilters {
    year?: string;
    genre?: string;
    platform?: string;
    tag?: string;
    developer?: string;
    search?: string;
}

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
        const response = await apiClient.get("games");
        return response.data.results;
    } catch (error) {
        console.error("Error fetching top-rated games:", error);
        return [];
    }
};

export const getFilteredGames = async (filters: GameFilters): Promise<Game[]> => {
    try {
        const response = await apiClient.get("games", {
            params: {
                ordering: "-metacritic",
                ...(filters.year && { dates: `${filters.year}-01-01,${filters.year}-12-31` }),
                ...(filters.genre && { genres: filters.genre }),
                ...(filters.platform && { platforms: filters.platform }),
                ...(filters.tag && { tags: filters.tag }),
                ...(filters.developer && { developers: filters.developer }),
                ...(filters.search && { search: filters.search }),
            },
        });
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