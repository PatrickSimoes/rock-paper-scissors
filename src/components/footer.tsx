import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiRock, GiHand, GiScissors } from "react-icons/gi";

const RULES = [
  { icon: GiRock, label: "Pedra", beats: "Tesoura" },
  { icon: GiScissors, label: "Tesoura", beats: "Papel" },
  { icon: GiHand, label: "Papel", beats: "Pedra" },
];

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="relative w-full bg-gray-800 text-gray-200 h-16">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Desenvolvido por <strong>PatrickSimoes</strong>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Regras
        </button>
      </footer>

      {/* Modal de Regras */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Regras do Jokenpô
            </h2>

            {/* Tabela de regras */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {RULES.map(({ icon: Icon, label, beats }) => (
                <div key={label} className="flex flex-col items-center">
                  <Icon className="h-8 w-8 text-yellow-400 mb-2" />
                  <span className="font-semibold text-lg">{label}</span>
                  <span className="mt-1 text-sm text-gray-300">ganha de</span>
                  <span className="mt-1 font-medium text-yellow-200">
                    {beats}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
