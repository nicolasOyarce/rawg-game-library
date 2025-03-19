import apiClient from "./apiClient";

export const getGenres = async () => {
    const response = await apiClient.get("genres", {
        params: { key: import.meta.env.VITE_RAWG_API_KEY },
    });
    return response.data.results;
};

export const getPlatforms = async () => {
    const response = await apiClient.get("platforms", {
        params: { key: import.meta.env.VITE_RAWG_API_KEY },
    });
    return response.data.results;
};

export const getTags = async () => {
    const response = await apiClient.get("tags", {
        params: { key: import.meta.env.VITE_RAWG_API_KEY },
    });
    return response.data.results;
};

export const getDevelopers = async () => {
    const response = await apiClient.get("developers", {
        params: { key: import.meta.env.VITE_RAWG_API_KEY },
    });
    return response.data.results;
};
