import React from "react";
import "./MenuButton.css";
import { useDispatch} from "react-redux";
import { setCursorMode,setCursorState  } from "store";

export function MenuButton (props) {
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    dispatch(setCursorState("hover"));
    dispatch(setCursorMode("menu"));
  };

  const handleMouseLeave = () => {
    dispatch(setCursorState("normal"));
    dispatch(setCursorMode("normal"));
  };

  return (
    <div 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    className="menubutton">MENU</div>
  );
};
