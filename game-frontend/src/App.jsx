import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </>
  );
}

export default App;
