import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { GiCrossedSwords } from "react-icons/gi";

const HeaderScoreboard: React.FC = () => {
  const { playerOne, computer } = useScore();
  const teamA = { name: "Você", score: playerOne };
  const teamB = { name: "Computador", score: computer };

  return (
    <header className="w-full bg-gray-800 text-white shadow-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* TIME A */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold font-[Cinzel]">
            {teamA.name}
          </span>
          <span className="rounded-lg bg-gray-700 px-4 py-2 text-3xl font-extrabold text-yellow-400 ring-2 ring-yellow-500 shadow-lg">
            {teamA.score}
          </span>
        </div>

        {/* Espadas cruzadas */}
        <GiCrossedSwords className="h-12 w-12 text-yellow-400 drop-shadow-lg" />

        {/* TIME B */}
        <div className="flex items-center gap-4">
          <span className="rounded-lg bg-gray-700 px-4 py-2 text-3xl font-extrabold text-yellow-400 ring-2 ring-yellow-500 shadow-lg">
            {teamB.score}
          </span>
          <span className="text-2xl font-semibold font-[Cinzel]">
            {teamB.name}
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderScoreboard;
