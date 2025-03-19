import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="bg-gray-900 p-4">
            <Link to={"/"}>
                <h1 className="text-3xl font-bold text-white mb-8 text-center">📌 Video Game Library</h1>
            </Link>
        </nav>
    );
}