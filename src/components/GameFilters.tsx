import { useState } from "react";

export interface FilterOptions {
    onApplyFilters: (filters: {
        search?: string;
        year?: string;
        genre?: string;
        platform?: string;
        tag?: string;
        developer?: string;
    }) => void;
}

const GameFilters = ({ onApplyFilters }: FilterOptions) => {
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [tag, setTag] = useState("");
    const [developer, setDeveloper] = useState("");

    const handleApplyFilters = () => {
        onApplyFilters({ search, year, genre, platform, tag, developer });
    };

    return (
        <div className="p-4 border rounded bg-gray-100">
            <h3 className="text-lg font-bold mb-2">🎯 Game Filter</h3>
            <input
                type="text"
                placeholder="🔍 Buscar juego..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border rounded mb-2"
            />
            <div className="grid grid-cols-2 gap-2">
                <input type="text" placeholder="Año" value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded" />
                <input type="text" placeholder="Género" value={genre} onChange={(e) => setGenre(e.target.value)} className="p-2 border rounded" />
                <input type="text" placeholder="Plataforma" value={platform} onChange={(e) => setPlatform(e.target.value)} className="p-2 border rounded" />
                <input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} className="p-2 border rounded" />
                <input type="text" placeholder="Desarrolladora" value={developer} onChange={(e) => setDeveloper(e.target.value)} className="p-2 border rounded" />
            </div>
            <button onClick={handleApplyFilters} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
                Apply filters
            </button>
        </div>
    );
};

export default GameFilters;

