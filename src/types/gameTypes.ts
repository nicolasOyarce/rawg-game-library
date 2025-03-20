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
    query?: string;
}

export interface GameListProps {
    filters: {
        query: string;
        year: string;
        genre: string;
        platform: string;
        tag: string;
        developer: string;
    };
}