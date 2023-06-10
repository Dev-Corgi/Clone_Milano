import React , { useEffect, useState,useRef } from "react";
import { motion } from "framer-motion";
import "./CurrentCounter.css";
export function CurrentCounter (props) {

  const [animationindex, setIndex] = useState(props.positionindex);
let condition = true
  const variants = {
    0 : {top: "0%", bottom: "80%", opacity:0},
    1 : {top: "20%", bottom: "60%", opacity:1},
    2 : {top: "40%", bottom: "40%",opacity:1},
    3 : {top: "60%", bottom: "20%",opacity:1},
    4 : {top: "80%", bottom: "0%", opacity:0}
  }
  
  const variantslength = Object.keys(variants).length

  useEffect(() => {
    const handleAnimation = (event) => {
      if (condition){
        condition = false
        if(event.deltaY > 0){
          setIndex(prevIndex => prevIndex + 1 == variantslength ? 0:prevIndex +1)
          }
          else{
            setIndex(prevIndex => prevIndex - 1 == -1 ? variantslength-1:prevIndex - 1)
          }
        setTimeout(function() {condition = true},800)
      }
  }
    window.addEventListener("wheel", handleAnimation);
  }, []);

  const counterRef  = useRef(null)

  useEffect(() => {
    const style = counterRef.current.style;
    style.top = variants[props.positionindex]["top"];
    style.bottom = variants[props.positionindex]["bottom"];
  }, []);

  

  return (
    
    <motion.div
      className="currentcounter"
      ref={counterRef}
      animate={variants[animationindex]}
      transition={{delay:0.2, duration: 1.0, ease : [0.165, 0.84, 0.44, 1]}}
    >
      {props.text}
    </motion.div>
  );
};
