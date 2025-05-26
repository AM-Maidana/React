import React, { useState } from "react";
import { motion } from "framer-motion";

export function BtnLegal() {
  const [confettis, setConfettis] = useState([]);

  function createConfetti() {
    const newConfettis = [];
    for (let i = 0; i < 100; i++) {
      newConfettis.push({
        id: i + Date.now(), // id único
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        xStart: Math.random() * window.innerWidth,
        yStart: Math.random() * window.innerHeight / 2,
        xEnd: Math.random() * window.innerWidth * 2 - window.innerWidth,
        yEnd: Math.random() * window.innerHeight * 2,
        rotate: Math.random() * 360,
      });
    }
    setConfettis(newConfettis);

    // Remove depois de 3s
    setTimeout(() => setConfettis([]), 3000);
  }

  function handleClick() {
    alert("Yay botão legal clicado!");
    createConfetti();
  }

  return (
    <>
      <button className="btnLegal" onClick={handleClick}>
        Clique aqui!
      </button>

      {confettis.map(({ id, color, xStart, yStart, xEnd, yEnd, rotate }) => (
        <motion.div
          key={id}
          className="confetti"
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            backgroundColor: color,
            left: xStart,
            top: yStart,
          }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          animate={{ x: xEnd, y: yEnd, rotate: rotate, opacity: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      ))}
    </>
  );
}
export default BtnLegal;