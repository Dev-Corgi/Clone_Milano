import React, { useEffect, useRef, useState } from "react";
import "./BackCard.css";
import {motion } from "framer-motion";
export function BackCard (props)  {
    const variants ={
        0 :{background: "#161A19"},
        1 :{background: "#4A4539"},
        2 :{background: "#858277"},
        3 :{background: "#AAA5A2"},
        4 :{background: "#ABB1AA"}
      }


  const variantslength = Object.keys(variants).length
  const [animationindex, setIndex] = useState(0);


  useEffect(() => {
    const handleAnimation = (event) => {
    if(event.value == 0) {return}
    else if(event.value ==1)
    {
        setIndex(prevIndex => prevIndex + 1 == variantslength ? 0 : prevIndex + 1);
    }
    else if(event.value == -1)
    {
      setIndex(prevIndex => prevIndex - 1 == -1 ? variantslength-1 :prevIndex -1)
    }
  }
    props.eventholder.addEventListener("animationevent", handleAnimation);
  }, []);

  return (
    <motion.div
      className="backcard"
      animate={variants[animationindex]}
      transition={{ delay:0.1, duration: 1.1, ease: [0.165, 0.84, 0.44, 1] }}
    >
    </motion.div>
  );
};

