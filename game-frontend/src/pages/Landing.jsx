import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Hand Betting Game</h1>

      <p className="text-slate-300 mb-10 max-w-md text-center">
        Bet higher or lower using Mahjong tiles. Tile values evolve. Risk grows.
        How far can you go?
      </p>

      <div className="flex flex-col gap-4 w-64">
        <button
          onClick={() => navigate("/game")}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-lg transition"
        >
          🎮 New Game
        </button>

        <button
          disabled
          className="bg-slate-700 text-slate-400 py-3 rounded-lg cursor-not-allowed"
        >
          🏆 Leaderboard (Coming Soon)
        </button>
      </div>
    </div>
  );
}
