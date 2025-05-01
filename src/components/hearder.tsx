import React from "react";
import { Team } from "./interface/header.interface";

interface Props {
  teamA: Team;
  teamB: Team;
}

/* SVG simples de duas espadas cruzadas  */
const SwordIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-10 w-10 ${className}`}
  >
    {/* espada 1 */}
    <path d="M2 22l6-6 3 3-6 6-3-3z" />
    <path d="M14 10l8-8" />
    {/* espada 2 */}
    <path d="M22 22l-6-6 3-3 6 6-3 3z" />
    <path d="M10 14l-8-8" />
    {/* empunhaduras */}
    <path d="M7 7l3-3" />
    <path d="M17 17l-3 3" />
  </svg>
);

const HeaderScoreboard: React.FC<Props> = ({ teamA, teamB }) => (
  <header className="w-full bg-gradient-to-r from-[#3e2b1d] via-[#5c3827] to-[#862522] shadow-xl border-b border-black/30">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      {/* TIME A */}
      <div className="flex w-1/2 items-center justify-start gap-4">
        <span className="truncate text-xl font-medium text-gray-100 sm:text-2xl font-[Cinzel]">
          {teamA.name}
        </span>

        <span className="rounded-md bg-white/15 px-4 py-1 text-3xl font-extrabold text-gray-50 backdrop-blur-sm ring-2 ring-white/20">
          {teamA.score}
        </span>
      </div>

      {/* Espadas cruzadas (substitui “vs”) */}
      <span className="hidden sm:inline-flex text-gray-100">
        <SwordIcon />
      </span>

      {/* TIME B */}
      <div className="flex w-1/2 items-center justify-end gap-4">
        <span className="rounded-md bg-white/15 px-4 py-1 text-3xl font-extrabold text-gray-50 backdrop-blur-sm ring-2 ring-white/20">
          {teamB.score}
        </span>

        <span className="truncate text-xl font-medium text-gray-100 sm:text-2xl font-[Cinzel]">
          {teamB.name}
        </span>
      </div>
    </div>
  </header>
);

export default HeaderScoreboard;
