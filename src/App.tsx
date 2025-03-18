import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameList from "./components/GameList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">List Games</h1>
        <GameList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
