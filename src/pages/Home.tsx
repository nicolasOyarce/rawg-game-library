import { useState } from "react";
import { Navigation } from "../components/Navigation";
import GameFilter from "../components/GameFilter";
import GameList from "../components/GameList";
import TopRatedGames from "../components/TopRatedGames";

const Home = () => {
    const [filters, setFilters] = useState({
        query: "",
        year: "",
        genre: "",
        platform: "",
        tag: "",
        developer: "",
    });

    const isFiltering = Object.values(filters).some((value) => value !== "");

    return (
        <div className="bg-gray-900 min-h-screen p-6">

            <Navigation />
            <GameFilter onFilterChange={setFilters} />
            {!isFiltering ? <TopRatedGames /> : <GameList filters={filters} />}

        </div>
    );
};

export default Home;