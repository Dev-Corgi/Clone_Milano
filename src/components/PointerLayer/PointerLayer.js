import { Pointer } from "./Pointer/Pointer";
import {HoverAnimation} from "./HoverAnimation/HoverAnimation"
import { PointerTail } from "./PointerTails/PointerTail";
import "./PointerLayer.css"
export const PointerLayer = () => {

  return (
       <div className="pointerlayer">
        <PointerTail classname = {"pointercircle3"}  delay = {0} duration = {0.30} ease = {[0.0, 0.0, 0.2, 1]}></PointerTail>
        <PointerTail classname = {"pointercircle2"}  delay = {0} duration = {0.25} ease = {[0.0, 0.0, 0.2, 1]}></PointerTail>
        <PointerTail classname = {"pointercircle1"}  delay = {0} duration = {0.2} ease = {[0.0, 0.0, 0.2, 1]} children = {<HoverAnimation></HoverAnimation>}></PointerTail>
        <Pointer classname = {"pointercircle0"} width = {18} height = {18} ></Pointer>
       </div>
  );
};