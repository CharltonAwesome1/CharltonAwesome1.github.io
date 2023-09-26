import './App.css';
// import { useEffect, useState, useRef } from "react";
import React from 'react';
// 
const Home = () => {


  const [placeholder, setPlaceholder] = React.useState('');

  const
    string = 'Charlton Solomons',
    index = React.useRef(-1),
    hello = "≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£",
    // hellolength = hello.length,
    replaceTheLetter = React.useRef(false);


  React.useEffect(() => {

    function tick() {
      var counter = Math.floor(Math.random() * hello.length);

      if (replaceTheLetter.current && index.current > 0) {
        setPlaceholder(prev => prev.substring(0, prev.length - 1));
        index.current = index.current - 1;
      } 
      if (counter < Math.floor(hello.length * 0.5)) {
        setPlaceholder(prev => prev + string[index.current]);
        replaceTheLetter.current = false;
      }
      else {
        setPlaceholder(prev => prev + hello[counter]);
        replaceTheLetter.current = true;
      }
    }

    if (index.current < string.length - 1) {
      index.current++;
      let addChar = setInterval(tick, 75);
      return () => clearInterval(addChar);
    };

    setPlaceholder(string);
  }, [placeholder]);



  return (
    <>
      <div className='outsideDiv'>
        <h2>{placeholder}</h2>
        <h3>Software Engineer</h3>
      </div>
    </>
  );

  // ≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£
  // ≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£

};

export default Home;