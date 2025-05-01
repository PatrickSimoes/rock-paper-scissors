import React from "react";
import { BiHappy, BiMeh, BiSad } from "react-icons/bi";

export type GameResult = "winner" | "tie" | "loser";

interface Props {
  result: GameResult | null;
  machineChoice: string | null;
}

const ResultBanner: React.FC<Props> = ({ result, machineChoice }) => {
  if (!result) return null;

  const config = {
    winner: {
      text: `Você ganhou! A máquina jogou ${machineChoice}.`,
      color: "text-green-400",
      border: "border-green-400",
      Icon: BiHappy,
    },
    tie: {
      text: `Empate! A máquina jogou ${machineChoice}.`,
      color: "text-yellow-400",
      border: "border-yellow-400",
      Icon: BiMeh,
    },
    loser: {
      text: `Você perdeu... A máquina jogou ${machineChoice}.`,
      color: "text-red-500",
      border: "border-red-500",
      Icon: BiSad,
    },
  } as const;

  const { text, color, border, Icon } = config[result];

  return (
    <div
      className={`
        mt-10 mx-auto flex items-center justify-center space-x-3
        ${color} ${border} border-2 rounded-lg 
        px-6 py-4 max-w-2xl
      `}
    >
      <Icon className={`h-8 w-8 ${color}`} />
      <span className={`${color} text-2xl font-semibold`}>{text}</span>
    </div>
  );
};

export default ResultBanner;
