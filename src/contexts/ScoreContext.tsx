import React, { createContext, useContext, useState } from "react";

interface ScoreContextData {
  playerOne: number;
  computer: number;
  addPlayerOne: () => void;
  addComputer: () => void;
}

const ScoreContext = createContext<ScoreContextData | undefined>(undefined);

export const ScoreProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [playerOne, setPlayerOne] = useState(0);
  
  const [computer, setComputer] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        playerOne,
        computer,
        addPlayerOne: () => setPlayerOne((p) => p + 1),
        addComputer: () => setComputer((p) => p + 1),
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export function useScore() {
  const ctx = useContext(ScoreContext);
  if (!ctx)
    throw new Error("useScore só pode ser usado dentro de <ScoreProvider>");
  return ctx;
}
