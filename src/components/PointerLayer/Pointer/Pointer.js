import { useEffect, useState} from "react";
import "./Pointer.css"
export const Pointer = (props) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({x : event.clientX-(props.width/2), y :event.clientY-(props.height/2)})
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
        <div
        className={props.classname} 
        style={{ left: mousePos.x+6, top: mousePos.y+4.5}}
      >
      </div>
  );
};