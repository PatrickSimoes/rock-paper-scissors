import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeaderScoreboard from "./components/hearder";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderScoreboard
      teamA={{ name: "Jon Snow", score: 2 }}
      teamB={{ name: "Player Two", score: 1 }}
    />

  </StrictMode>
);
