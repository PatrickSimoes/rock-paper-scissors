import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeaderScoreboard from "./components/hearder";
import ResultGame from "./components/game";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderScoreboard
      teamA={{ name: "Jon Snow", score: 2 }}
      teamB={{ name: "Player Two", score: 1 }}
    />
    <ResultGame playerOne='rock' />
  </StrictMode>
);
