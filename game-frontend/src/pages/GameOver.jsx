import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function GameOver() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <NavBar />

      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-red-400">Game Over</h1>

        <p className="text-slate-300 mb-6">Final Score</p>

        <div className="text-6xl font-extrabold mb-10">0</div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/game")}
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Play Again
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg"
          >
            Home
          </button>
        </div>
      </main>
    </div>
  );
}
