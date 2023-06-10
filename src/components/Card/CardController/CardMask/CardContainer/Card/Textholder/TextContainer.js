import React, { useEffect, useRef, useState } from "react";
import "./TextContainer.css";
import { motion } from "framer-motion";
import { Description } from "./Description/Description";
import { Title } from "./Title/Title";
import { Label } from "./Label/Label";

export function TextContainer(props) {

  const textdata = {
    0: {
      label: "ABOUT",

      title: {
        before_span: "Design ",
        span: "for",
        after_span: " Beauty",
      },

      description: "WE CREATE BEAUTY AS A VOCATION",
    },

    1: {
      label: "CULTURE",

      title: {
        before_span: "Patners ",
        span: "in",
        after_span: " Dreams",
      },

      description: "WE ARE LOYAL TO THE STYLE OF OUR CLIENTS",
    },

    2: {
      label: "PROTOTYPING",

      title: {
        before_span: "The ",
        span: "Art",
        after_span: " of pattern making",
      },

      description: "FROM SKETCH TO GARMENT,A COMPLETE AND CUSTOMIZED SERVICE",
    },

    3: {
      label: "PRODUCTION",

      title: {
        before_span: "Crafting ",
        span: "your",
        after_span: " ideas",
      },

      description: "WE TRANSFORM A CREATIVE VISION INTO EXCLUSIVE GARMENTS",
    },

    4: {
      label: "SUSTAINABILITY",

      title: {
        before_span: "Shaping a ",
        span: "better",
        after_span: " future",
      },

      description: "ETHICS AND AESTHETICS: AN ISEPARABLE BOND",
    },
  };

  return (

<div 
    className="textcontainer"
    >
  <Label eventholder = {props.eventholder} text = {textdata[props.index].label}></Label>
  <Title eventholder = {props.eventholder} beforespan = {textdata[props.index].title.before_span} span = {textdata[props.index].title.span} afterspan = {textdata[props.index].title.after_span}></Title>
  <Description eventholder = {props.eventholder} text = {textdata[props.index].description}></Description>
</div>

  );

}
