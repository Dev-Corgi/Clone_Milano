import React, { useEffect, useState,useRef } from "react";
import "./CardMask.css";
import { motion } from "framer-motion";
import {CardContainer} from "./CardContainer/CardContainer"
import { useDispatch} from "react-redux";
import { setCursorMode,setCursorState  } from "store";
export function CardMask (props) {

  const [animationindex, setIndex] = useState(props.positionindex);

  

  const variants = {
    7:{left: ["22.27%","20.22%"], right: ["22.27%","20.22%"], top: ["12.86%","15.07%"], bottom: ["-8%","-17.25%"],zIndex:[0,2]},
    6: {left: [null,"11.31%"], right: [null,"11.31%"], top: [null,"100%"], bottom: [null,"-75.75%"],zIndex:[null,6]},
    5: {left: [null,"11.31%"],right: [null,"11.31%"],top: [null,"24.21%"],bottom: [null,"-56.93%"],zIndex:[null,5]},
    4: {left: [null,"14.77%"], right: [null,"14.77%"], top: [null,"20.6%"], bottom: [null,"-41.46%"] ,zIndex:[null,4]},
    3: {left: [null,"17.70%"], right: [null,"17.70%"], top: [null,"17.58%"], bottom: [null,"-28.4%"] ,zIndex:[null,3]},
    2: {left: [null,"20.22%"], right: [null,"20.22%"], top: [null,"15.07%"], bottom: [null,"-17.25%"] ,zIndex:[null,2]},
    1: {left: [null,"22.27%"], right: [null,"22.27%"], top: [null,"12.86%"], bottom: [null,"-8%"] ,zIndex:[null,0]},
    0:{left: ["11.31%","11.31%"], right: ["11.31%","11.31%"], top: ["100%","24.21%"], bottom: ["-75.75%","-56.93%"] ,zIndex:[6,5]}
  };

  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    dispatch(setCursorState("hover"));
    dispatch(setCursorMode("normal"));
  };

  const handleMouseLeave = () => {
    dispatch(setCursorState("normal"));
    dispatch(setCursorMode("normal"));
  };

  const cardRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (event) => {
    if(event.value == 0) {return}
    else if(event.value ==1)
    {
        setIndex(prevIndex =>{
         if (prevIndex == 7){return 3} 
         else {return prevIndex + 1}
        });
    }
    else if(event.value == -1)
    {
      setIndex(prevIndex => {
        if (prevIndex == 0){return 4} 
        else {return prevIndex - 1}})
    }
  }
    props.eventholder.addEventListener("animationevent", handleAnimation);
  }, []);

  useEffect(() => {
    const style = cardRef.current.style;
    style.left = variants[props.positionindex]["left"];
    style.right = variants[props.positionindex]["right"];
    style.top = variants[props.positionindex]["top"];
    style.bottom = variants[props.positionindex]["bottom"];
    style.zIndex = props.positionindex;
  }, []);

  

  return (
    
    <motion.div
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
      className="cardmask"
      ref={cardRef}
      animate={variants[animationindex]}
      transition={{duration: 1.2, ease : [0.19, 1, 0.22, 1]}}
    >
      <CardContainer animationindex = {animationindex} imgindex={props.imgindex} positionindex={props.positionindex} eventholder = {props.eventholder}></CardContainer>

    </motion.div>
  );
};


