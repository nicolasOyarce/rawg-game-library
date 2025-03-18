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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Game Filters</h3>
                <input
                    type="text"
                    placeholder="🔍 Search game..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Platform"
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Developer"
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleApplyFilters}
                    className="mt-6 w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default GameFilters;