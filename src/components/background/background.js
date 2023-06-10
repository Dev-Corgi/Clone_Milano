import React, { useEffect, useRef, useState } from "react";
import "./background.css";
import { motion } from "framer-motion";



export const Background = ({}) => {
 
  const[backgroundcolor,setBackgroundColor] = useState(0)
  let condition = true
  const color = {
    0: { background:"#191D1C"},
    1: { background:"#524D40"},
    2: { background:"#949185"},
    3: { background:"#BDB8B4"},
    4: { background:"#BEC5BD"},
  };

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("Back On1s")
      if (condition){
        condition = false
        setBackgroundColor((backgroundcolor + Math.sign(event.deltaY))%5 < 0 ? 4 : (backgroundcolor + Math.sign(event.deltaY))%5)
        setTimeout(function() {condition = true},800)
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [backgroundcolor]);



  return (
    <motion.div
      className="background"
      animate={color[backgroundcolor]}
      transition={{ delay:0.1, duration: 1.1, ease: [0.165, 0.84, 0.44, 1] }}
    />
  );
};
