import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { TextContainer } from "./Textholder/TextContainer";
import about from "assets/card/about.mp4";
import culture from "assets/card/culture.mp4";
import production from "assets/card/production.mp4";
import prototyping from "assets/card/prototyping.mp4";
import sustainability from "assets/card/sustainability.mp4";

export function Card(props) {
  const eventHolderRef = useRef(new EventTarget());
  const [animationindex,setIndex] = useState(props.positionindex-1)

  const animationevent = new CustomEvent('animationevent', {
    value: 0 
  });

  const variants = {
    4: { opacity: 1 },
    3: { opacity: 0.75 },
    2: { opacity: 0.5 },
    1: { opacity: 0.25 },
    0: { opacity: 0 },
  };
  const variantslength = Object.keys(variants).length
  const videolist = [
    about,
    culture,
    prototyping,
    production,
    sustainability
  ];

  const videoRef = useRef(null);

  
  useEffect(() => {
    const handleScroll = (event) =>{
      if(event.value == 1){
      setIndex(prevIndex => prevIndex + 1 == variantslength ? 0:prevIndex +1)
      }
      else if(event.value == -1){
        setIndex(prevIndex => prevIndex - 1 == -1 ? variantslength-1:prevIndex - 1)
      }
  }
  props.eventholder.addEventListener("animationevent", handleScroll);
  
  }, []);

  useEffect(()=>{
    console.log(animationindex)
    if (animationindex == 4){
      animationevent.value = 1
      videoRef.current.play()
    }

    else{
      animationevent.value = 0
      videoRef.current.pause()
    }
    eventHolderRef.current.dispatchEvent(animationevent);
  },[animationindex])

  useEffect(() => {
    if (animationindex == 4){
      videoRef.current.play()
    }
else{
    videoRef.current.pause()
}
  }, [])

  return (
    <motion.div
      className="card"
      animate={variants[animationindex]}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1]}}
    >
      <div className="video-container">
      <video ref={videoRef} src={videolist[props.imgindex]} autoPlay muted loop>
      </video>
    </div>
      <TextContainer index={props.imgindex} eventholder={eventHolderRef.current} />
    </motion.div>
  );
};