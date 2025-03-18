import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="bg-gray-900 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-indigo-400 ">404</h1>
                <p className="text-2xl text-white mt-4">Oops! Page not found.</p>
                <p className="text-white mt-2">The page you're looking for doesn't exist or has been moved.</p>
                <Link to={'/'}><p className="mt-6 inline-block px-6 py-3 bg-white text-indigo-400 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">Go Home</p></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;