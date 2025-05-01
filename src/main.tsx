// src/main.tsx
import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ScoreProvider, useScore } from "./contexts/ScoreContext";

import HeaderScoreboard from "./components/hearder";
import GameOptions from "./components/play";
import ResultBanner from "./components/ResultBanner";
import LoadingOverlay from "./components/LoadingOverlay";
import Footer from "./components/footer";
import { getResult, ResultData } from "./components/game";
import { GameOption } from "./components/play";

const labels: Record<GameOption, string> = {
  rock: "Pedra",
  paper: "Papel",
  scissors: "Tesoura",
};

const TIMEOUT_MS = 500;

const App: React.FC = () => {
  const { addPlayerOne, addComputer } = useScore();
  const [lastResult, setLastResult] = useState<
    "winner" | "tie" | "loser" | null
  >(null);
  const [machineChoice, setMachineChoice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePlay = (option: GameOption) => {
    setLoading(true);
    setTimeout(() => {
      const { result, computerChoice }: ResultData = getResult(option);
      setLastResult(result);
      setMachineChoice(labels[computerChoice]);

      if (result === "winner") addPlayerOne();
      if (result === "loser") addComputer();

      setLoading(false);
    }, TIMEOUT_MS);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderScoreboard />

      <main className="relative flex flex-col items-center justify-center flex-1">
        {loading && <LoadingOverlay duration={TIMEOUT_MS} />}
        <GameOptions onPlay={handlePlay} />
        <ResultBanner result={lastResult} machineChoice={machineChoice} />
      </main>

      <Footer />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </StrictMode>
);
