import React from "react";
import { motion } from "framer-motion";
import { GiCrossedSwords } from "react-icons/gi";

interface Props {
  duration: number;
}

const LoadingOverlay: React.FC<Props> = ({ duration }) => {
  const durSec = duration / 1000; // Framer usa segundos

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
      <motion.div
        className="text-yellow-400"
        animate={{ rotate: [0, 360, 0] }}
        transition={{
          duration: durSec,
          times: [0, 0.8, 1],
          ease: "linear",
        }}
      >
        <GiCrossedSwords size={80} />
      </motion.div>
    </div>
  );
};

export default LoadingOverlay;
