import React from "react";
import { MainButton } from "../Buttons/Buttons";
import "./NextServiceBox.css";

export const NextServiceBox = (props) => {
  return (
    <div
      className="next_service_box"
      style={{ background: `url(${props.background})` }}
      data-aos="flip-right"
    >
      <img className="icon" src={props.icon} alt="" />
      <p>{props.title}</p>
      <MainButton dark link={props.link} text="learn more" />
    </div>
  );
};
