import { useState, useEffect } from "react";
import { getGenres, getPlatforms, getTags, getDevelopers } from "../services";

interface GameFilterProps {
    onFilterChange: (filters: { query: string; year: string; genre: string; platform: string; tag: string; developer: string }) => void;
}

const GameFilter = ({ onFilterChange }: GameFilterProps) => {
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [tag, setTag] = useState("");
    const [developer, setDeveloper] = useState("");

    const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
    const [platforms, setPlatforms] = useState<{ id: number; name: string }[]>([]);
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    const [developers, setDevelopers] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        getGenres().then(setGenres);
        getPlatforms().then(setPlatforms);
        getTags().then(setTags);
        getDevelopers().then(setDevelopers);
    }, []);

    useEffect(() => {
        onFilterChange({ query, year, genre, platform, tag, developer });
    }, [query, year, genre, platform, tag, developer, onFilterChange]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <h3 className="text-xl font-bold text-white">🎯 Game Filters</h3>
                    <input
                        type="text"
                        placeholder="🔍 Search game..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full lg:w-auto lg:flex-1 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Year</option>
                        {Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                            <option key={y} value={y}>
                                {y}
                            </option>
                        ))}
                    </select>
                    <select
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Genre</option>
                        {genres.map((g) => (
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Platform</option>
                        {platforms.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Tag</option>
                        {tags.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                    <select
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Developer</option>
                        {developers.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default GameFilter;