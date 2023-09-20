import './App.css';
import { useEffect, useState, useRef } from "react";

const Home = () => {

  const [returnString, setreturnString] = useState("");
  const count = useRef("");
  // const hmm = "Hello World"

  // count
  useEffect(() => {
    setreturnString("");
    // count.current = "";
    for (let i = 0; i < 6; i++){  
      setTimeout(() => {
        // setInterval(() => {
        // count.current = count.current + i.toString();
        // setreturnString((returnString) => returnString + i.toString());
        // setreturnString((returnString) => returnString = i.toString());
        setreturnString((returnString) => returnString = i.toString());
      }, 1000);
    }; 
  }, []);    
 
  // useEffect(() => {  

  //   for (let i = 0; i < hmm.length; i++) {

  //     setreturnString(
  //       (returnString) => setTimeout(() => {
  //         returnString = returnString + "l" + hmm.charAt(i).toString
  //       }, 1000));


  //     // setString = () => returnString + hmm.charAt(i);  
  //     // console.log(hmm.charAt(i));
  //   }
  // }, [])

  // const varHello = "Hel"
  // var varCounter = 0;

  // useEffect(() => {


  // //   for (let i = 0; i < varHello.length; i++){


  //       while (varCounter < varHello.length){
  //         setTimeout(() => {
  //         setreturnString(returnString + varHello.charAt(varCounter));
  //         console.log(returnString + varHello.charAt(varCounter));
  //         varCounter = varCounter + 1;
  //       }


  // //       setreturnString(returnString) => returnString + varHello.charAt(varCounter);
  // //       );
  //       , 1000);}  
  //       console.log("here " + returnString );
  // //   }
  // }
  // , []);



  return (
    <>
      <div className='outsideDiv'>
        {/* <h2>Charlton Solomons</h2> */}
        <h2>{returnString}</h2>
        {/* <h2>{count.current}</h2> */}
        <h3>Software Engineer</h3>
      </div>
    </>
  );

  // ≥¶/˚░≤¢•<…–`ƒ?˜æå÷∫µ▒≈¬∞˙ß™∆§ç▓∂≠>ª√¡©º£

};

export default Home;