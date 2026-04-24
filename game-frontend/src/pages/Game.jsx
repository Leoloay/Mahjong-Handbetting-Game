import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Game() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />

      <main className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Current Hand</h2>

          <button
            onClick={() => navigate("/")}
            className="text-sm text-red-400 hover:text-red-500"
          >
            Exit Game
          </button>
        </div>

        {/* Placeholder */}
        <div className="bg-slate-800 rounded-lg p-10 text-center text-slate-400">
          Game UI coming next…
        </div>
      </main>
    </div>
  );
}
