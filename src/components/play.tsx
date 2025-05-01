import React from "react";
import rockIcon from "../assets/icons/rock.svg";
import paperIcon from "../assets/icons/paper.svg";
import scissorsIcon from "../assets/icons/scissors.svg";

export type GameOption = "rock" | "paper" | "scissors";

interface Props {
  onPlay: (option: GameOption) => void;
}

const icons: Record<GameOption, string> = {
  rock: rockIcon,
  paper: paperIcon,
  scissors: scissorsIcon,
};

const labels: Record<GameOption, string> = {
  rock: "Pedra",
  paper: "Papel",
  scissors: "Tesoura",
};

const GameOptions: React.FC<Props> = ({ onPlay }) => (
  <div className="flex justify-center items-center gap-8 w-full px-4 my-12">
    {(Object.keys(icons) as GameOption[]).map((opt) => (
      <button
        key={opt}
        onClick={() => onPlay(opt)}
        className="
          flex flex-col items-center justify-center
          w-[30%] h-[35vh]
          bg-gray-800
          border-4 border-yellow-500
          rounded-2xl
          hover:scale-105 hover:shadow-2xl
          transition-all
        "
      >
        <img
          src={icons[opt]}
          alt={opt}
          className="h-3/4 w-3/4 object-contain"
        />
        <span className="mt-2 text-yellow-400 text-xl font-semibold">
          {labels[opt]}
        </span>
      </button>
    ))}
  </div>
);

export default GameOptions;
