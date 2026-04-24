import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white shadow-md">
      <Link to="/" className="text-xl font-bold tracking-wide">
        🀄 Hand Betting Game
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link to="/game" className="hover:text-amber-400 transition-colors">
          New Game
        </Link>
      </div>
    </nav>
  );
}
