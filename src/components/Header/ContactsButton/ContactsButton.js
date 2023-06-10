import React from "react";
import "./ContactsButton.css";
import { useDispatch} from "react-redux";
import { setCursorMode,setCursorState  } from "store";

export function ContactsButton () {
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    dispatch(setCursorState("hover"));
    dispatch(setCursorMode("contacts"));
  };

  const handleMouseLeave = () => {
    dispatch(setCursorState("normal"));
    dispatch(setCursorMode("normal"));
  };

  return (
    <div 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave} 
    className="contactsbutton">Contacts</div>
  );
};
