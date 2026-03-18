import "./App.css";
import { useEffect, useState, useRef } from "react";
// import React from 'react';
//
const Home = () => {
  const [displayName, setDisplayName] = useState("");

  const governmentName = "Charlton Solomons";
  const index = useRef(-2);
  const symbols = "≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£";
  const replaceTheLetter = useRef(false);
  
//   useEffect(() => {

//     const concatenateSymbol = (() => {

        
//     });
    
//     if (displayName.length < governmentName.length){
//         setDisplayName
//     }

//   }, [governmentName])

  useEffect(
    () => {
      function tick() {
        const randomSymbolIndex = Math.floor(Math.random() * symbols.length);

        if (replaceTheLetter.current && displayName.length < governmentName.length) {
          setDisplayName(prev => prev.substring(0, prev.length - 1));
          index.current = index.current - 1;
        }

        if (Math.random() < 0.5) {
            console.log(governmentName[index.current]);
          setDisplayName(prev => prev + governmentName[index.current]);
          replaceTheLetter.current = false;
        } else {
          setDisplayName(prev => prev + symbols[randomSymbolIndex]);
          replaceTheLetter.current = true;
        }
      }

      if (index.current < governmentName.length) {
        index.current++;
        let addChar = setInterval(tick, 75);

        return () => clearInterval(addChar);
      }

      setDisplayName(governmentName);
    },
    [displayName]
  );

  useEffect(() => {
    console.log("print");
  }, []);

  return (
    <div className="outsideDiv">
      <h2>
        {displayName}
      </h2>
      <h3>Software Engineer</h3>
    </div>
  );

  // ≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£
  // ≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£
};

export default Home;
