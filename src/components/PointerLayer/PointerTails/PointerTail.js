import { useEffect, useState} from "react";
import "./PointerTails.css";
import { motion } from "framer-motion";

export const PointerTail = (props) => {

const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => { 
    const mousemove = (e) => {
       setTimeout(() => {setMousePos({x : e.clientX, y :e.clientY})},props.delay)
      };

      document.addEventListener('mousemove', mousemove);

      return () => {
        document.removeEventListener('mousemove', mousemove);
      };
  }, []);


  return (
       <motion.div

        animate={{
          x: mousePos.x ,
          y: mousePos.y
        }}
        transition={{ duration : props.duration, ease:props.ease}}
        className= {props.classname}>
          {props.children}
        </motion.div>
      
  );
};

