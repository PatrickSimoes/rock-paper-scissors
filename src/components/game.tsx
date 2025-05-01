// src/components/game.tsx
import { GameOption } from "./play";

export type GameResult = "winner" | "tie" | "loser";

export interface ResultData {
  result: GameResult;
  computerChoice: GameOption;
}

const beats: Record<GameOption, GameOption> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export function getResult(playerOne: GameOption): ResultData {
  const gameOptions: GameOption[] = ["rock", "paper", "scissors"];
  const playerTwo = gameOptions[Math.floor(Math.random() * gameOptions.length)];

  if (playerOne === playerTwo) {
    return { result: "tie", computerChoice: playerTwo };
  }
  const result: GameResult = beats[playerOne] === playerTwo ? "winner" : "loser";
  return { result, computerChoice: playerTwo };
}
