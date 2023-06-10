import React from "react";
import "./CurrentCounterFrame.css";
import { CurrentCounter } from "./CurrentCounter/CurrentCounter";
export function CurrentCounterFrame () {


  return (
      <div className="currentcounterframe">
        <CurrentCounter positionindex={0} text="01"></CurrentCounter>
        <CurrentCounter positionindex={1} text="02"></CurrentCounter>
        <CurrentCounter positionindex={2} text="03"></CurrentCounter>
        <CurrentCounter positionindex={3} text="04"></CurrentCounter>
        <CurrentCounter positionindex={4} text="05"></CurrentCounter>
      </div>

  );
};

<svg width="200" height="200">
      <defs>
        <mask id="myMask">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <circle cx="100" cy="100" r="50" fill="black" />
        </mask>
      </defs>
      <rect x="0" y="0" width="200" height="200" mask="url(#myMask)" />
    </svg>


