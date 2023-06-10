import React, { useEffect, useRef, useState } from "react";
import "./Description.css";
import { motion } from "framer-motion";
export function Description (props)  {
  let variants = {
    0: {
      opacity: 0,
      y: "3.015rem",
      transition: {
        opacity: {delay : 0.25, duration: 0.6 },
        y: {delay : 0.25, duration: 1.1, ease : [0.165, 0.84, 0.44, 1]},
      },
    },

      1: {
        opacity: 1,
        y: "-3.015rem",
        transition: {
          opacity: {delay : 0.1, duration: 0.6 },
          y: {delay : 0.1, duration: 1.1, ease : [0.165, 0.84, 0.44, 1]},
        },
    },

    2:{}
  };

  const [animationindex, setIndex] = useState(0);

  useEffect(() => {
    const handleAnimation = (event) => {
      setIndex(event.value);
  }
    props.eventholder.addEventListener("animationevent", handleAnimation);
  }, []);

  return (
    <motion.div
    className="description"
    initial = {variants[0]}
    animate={variants[animationindex]}
    >
    {props.text}
    </motion.div>
  );

};

