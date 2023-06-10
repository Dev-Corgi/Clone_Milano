import React from "react";
import "./Footer.css";
import {Italiano} from "./Italiano/Italiano"
import {PlayVideoButton} from "./PlayVideoButton/PlayVideoButton"
export function Footer () {
  return (
    <div className="footer">
      <Italiano></Italiano>
      <PlayVideoButton></PlayVideoButton>
    </div>
  );
};
