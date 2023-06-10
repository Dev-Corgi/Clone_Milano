import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import { motion } from "framer-motion";
import {Card} from "./Card/Card"
export function CardContainer (props) {

  const [animationindex, setIndex] = useState(0);

  const variants = {
    4: {background: "#161A19"},
    3: {background: "#4A4539"},
    2: {background: "#858277"},
    1: {background: "#AAA5A2"},
    0: {background: "#ABB1AA"},
  };
  const variantslength = Object.keys(variants).length

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
      className="cardcontainer"
      animate={variants[animationindex]}
      transition={{ delay:0.1, duration: 1.1, ease: [0.165, 0.84, 0.44, 1]}}
    >
      <Card  imgindex={props.imgindex} positionindex={props.positionindex} eventholder = {props.eventholder}></Card>

    </motion.div>
  );
};
