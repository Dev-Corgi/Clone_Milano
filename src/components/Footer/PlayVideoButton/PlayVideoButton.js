import React from "react";
import "./PlayVideoButton.css";
import { useDispatch} from "react-redux";
import { setCursorMode,setCursorState  } from "store";

export function PlayVideoButton () {
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    dispatch(setCursorState("hover"));
    dispatch(setCursorMode("video"));
  };

  const handleMouseLeave = () => {
    dispatch(setCursorState("normal"));
    dispatch(setCursorMode("normal"));
  };

  return (
    <div 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    className="playvideobutton">Play video</div>
  );
};


