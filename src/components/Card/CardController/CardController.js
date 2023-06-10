import React, { useState, useEffect,useRef } from "react";
import { BackCard } from "../BackCard/BackCard";
import { CardMask } from "./CardMask/CardMask";
export function CardController() {
  const eventHolderRef = useRef(new EventTarget());
  const animationevent = new CustomEvent('animationevent', {
    value: 0 
  });

let condition = true

  useEffect(() => { 
    const handleScroll = (event) => {
      if (condition){
      condition = false
      //아래
      if (event.deltaY > 0) {
        animationevent.value = 1
      }
      //위
      else {
        animationevent.value = -1
      }
      eventHolderRef.current.dispatchEvent(animationevent)
      setTimeout(function() {condition = true},800)
    }
  }
    window.addEventListener("wheel", handleScroll);
  }, []);

  return (
    <div>
      <BackCard eventholder = {eventHolderRef.current}></BackCard>
    <CardMask imgindex={0} positionindex={5} eventholder = {eventHolderRef.current} />,
    <CardMask imgindex={1} positionindex={4} eventholder = {eventHolderRef.current} />,
    <CardMask imgindex={2} positionindex={3} eventholder = {eventHolderRef.current} />,
    <CardMask imgindex={3} positionindex={2} eventholder = {eventHolderRef.current} />,
    <CardMask imgindex={4} positionindex={1} eventholder = {eventHolderRef.current} />,
      </div>
  );
}







