import React from "react";
import "./Italiano.css";
import { useDispatch} from "react-redux";
import { setCursorMode,setCursorState  } from "store";

export function Italiano () {
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    dispatch(setCursorState("hover"));
    dispatch(setCursorMode("language"));
  };

  const handleMouseLeave = () => {
    dispatch(setCursorState("normal"));
    dispatch(setCursorMode("normal"));
  };

  return (
    <div 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    className="italiano">Italiano</div>
  );
};

