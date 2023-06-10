import { useEffect, useState,useRef} from "react";
import "./HoverAnimation.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useSprite } from 'react-sprite-animator'
import pointer from"assets/pointer.png"
export const HoverAnimation = () => {
  const state = useSelector((state) => state.cursorState);
  const mode = useSelector((state) => state.cursorMode);
  const[showsprite,setshowsprite] = useState(false)
  const[animationindex,setindex] =useState(0)
  const spriteRef = useRef(null)

  const spriteConfig = {
    normal: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 26,
      wrapAfter: 25,
      frameCount: 50,
    }),
    home: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 1,
      wrapAfter: 12,
      frameCount: 12,
    }),
    code: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 95,
      wrapAfter: 47,
      frameCount: 141,
    }),
    video: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 136,
      wrapAfter: 45,
      frameCount: 180,
    }),
    call: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 125,
      wrapAfter: 31,
      frameCount: 155,
    }),
    mail: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 125,
      wrapAfter: 31,
      frameCount: 155,
    }),
    contacts: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 206,
      wrapAfter: 41,
      frameCount: 246,
    }),
    menu: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 247,
      wrapAfter: 41,
      frameCount: 287,
    }),
    address: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 323,
      wrapAfter: 46,
      frameCount: 368,
    }),
    language: useSprite({
      sprite: pointer,
      width: 50,
      height: 50,
      fps: 33,
      direction: "vertical",
      startFrame: 417,
      wrapAfter: 52,
      frameCount: 468,
    }),
  };


const[scale,setscale] = useState(1)

const variants = {
  0:{width:38,height:38},
  1:{width:76,height:76,x:-19,y:-19}
}

useEffect(() => {
    if(state == "normal"){
          setindex(0)
    }

    else if(state == "hover"){
           setindex(1)
    }

  }, [state]);

  useEffect(() => {
    if(mode == "normal"){
      setshowsprite(false)
    }

    else {
      setshowsprite(true)
    }

  }, [mode]);


  return (
       <motion.div
        animate={
         variants[animationindex]
        }
        transition={{duration : 0.5, ease:[0.19, 1, 0.22, 1]}
      }
        className= "hover">
            {showsprite ? (
        <div className="sprite" style={spriteConfig[mode]}/>
      ) : null}
        </motion.div>
  );
};

