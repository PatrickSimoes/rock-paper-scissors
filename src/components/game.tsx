const gameOptions = ["rock", "paper", "scissors"] as const;

type GameOption = (typeof gameOptions)[number];

const beats: Record<GameOption, GameOption> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function getResult(playerOne: GameOption): "tie" | "winner" | "loser" {
  const playerTwo = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  if (playerOne === playerTwo) return "tie";

  if (beats[playerOne] === playerTwo) return "winner";

  return "loser";
}

const ResultGame = ({ playerOne }: { playerOne: GameOption }): string => {
  return getResult(playerOne);
};

export default ResultGame;
